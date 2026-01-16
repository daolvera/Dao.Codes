import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  template: `
    <div
      #container
      class="font-mono text-sm rounded-lg p-4 overflow-hidden"
      style="background-color: var(--bg-secondary); border: 1px solid var(--border-color);"
    >
      <div
        class="flex items-center gap-2 mb-3 pb-2 border-b"
        style="border-color: var(--border-color);"
      >
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="ml-2 text-xs opacity-60">Program.cs</span>
      </div>
      <pre
        class="whitespace-pre-wrap"
      ><code [innerHTML]="displayedCode()"></code><span class="cursor-blink text-primary">▋</span></pre>
    </div>
  `,
})
export class TypewriterComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('container') containerRef!: ElementRef;

  displayedCode = signal('');

  private codeSnippets = [
    `<span class="text-purple-400">using</span> <span class="text-blue-400">Microsoft.AspNetCore.Builder</span>;

<span class="text-purple-400">var</span> builder = WebApplication.CreateBuilder(args);
<span class="text-purple-400">var</span> app = builder.Build();

app.MapGet(<span class="text-green-400">"/"</span>, () => <span class="text-green-400">"Hello from Dan!"</span>);

app.Run();`,
    `<span class="text-gray-500">// Building something awesome...</span>
<span class="text-purple-400">public class</span> <span class="text-yellow-400">Developer</span>
{
    <span class="text-purple-400">public string</span> Name => <span class="text-green-400">"Dan Olvera"</span>;
    <span class="text-purple-400">public string[]</span> Skills => [<span class="text-green-400">".NET"</span>, <span class="text-green-400">"Angular"</span>];
    <span class="text-purple-400">public bool</span> IsLearning => <span class="text-blue-400">true</span>;
}`,
    `<span class="text-gray-500">// Community is everything</span>
<span class="text-purple-400">await</span> userGroup.HostMeetupAsync(
    topic: <span class="text-green-400">"What's New in .NET"</span>,
    attendees: <span class="text-blue-400">50</span>,
    pizza: <span class="text-blue-400">true</span>
);`,
  ];

  private currentSnippetIndex = 0;
  private charIndex = 0;
  private typingInterval?: ReturnType<typeof setInterval>;
  private pauseTimeout?: ReturnType<typeof setTimeout>;
  private observer?: IntersectionObserver;
  private isTyping = false;
  private hasStarted = false;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasStarted) {
            this.hasStarted = true;
            this.startTyping();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (this.containerRef) {
      this.observer.observe(this.containerRef.nativeElement);
    }
  }

  private startTyping(): void {
    if (this.isTyping) return;
    this.isTyping = true;
    this.typeNextChar();
  }

  private typeNextChar(): void {
    const currentSnippet = this.getPlainText(
      this.codeSnippets[this.currentSnippetIndex]
    );
    const htmlSnippet = this.codeSnippets[this.currentSnippetIndex];

    if (this.charIndex < currentSnippet.length) {
      // Build the HTML up to current position
      this.displayedCode.set(
        this.buildPartialHtml(htmlSnippet, this.charIndex + 1)
      );
      this.charIndex++;

      const delay = this.getTypingDelay(currentSnippet[this.charIndex - 1]);
      this.typingInterval = setTimeout(() => this.typeNextChar(), delay);
    } else {
      // Finished current snippet, pause then move to next
      this.pauseTimeout = setTimeout(() => {
        this.charIndex = 0;
        this.currentSnippetIndex =
          (this.currentSnippetIndex + 1) % this.codeSnippets.length;
        this.displayedCode.set('');
        this.typeNextChar();
      }, 3000);
    }
  }

  private getPlainText(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }

  private buildPartialHtml(html: string, charCount: number): string {
    let result = '';
    let plainCharCount = 0;
    let i = 0;
    let inTag = false;

    while (i < html.length && plainCharCount < charCount) {
      if (html[i] === '<') {
        inTag = true;
        // Find closing bracket and include entire tag
        const closeIndex = html.indexOf('>', i);
        if (closeIndex !== -1) {
          result += html.substring(i, closeIndex + 1);
          i = closeIndex + 1;
          inTag = false;
          continue;
        }
      }

      if (!inTag) {
        result += html[i];
        plainCharCount++;
      }
      i++;
    }

    // Close any open tags
    const openTags = result.match(/<span[^>]*>/g) || [];
    const closeTags = result.match(/<\/span>/g) || [];
    const unclosed = openTags.length - closeTags.length;
    for (let j = 0; j < unclosed; j++) {
      result += '</span>';
    }

    return result;
  }

  private getTypingDelay(char: string): number {
    if (char === '\n') return 100;
    if (char === ' ') return 30;
    if (['{', '}', '(', ')', ';'].includes(char)) return 80;
    return 25 + Math.random() * 25;
  }

  private cleanup(): void {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
    if (this.pauseTimeout) {
      clearTimeout(this.pauseTimeout);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
