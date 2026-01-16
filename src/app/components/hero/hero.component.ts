import { Component } from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';
import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TypewriterComponent],
  template: `
    <section class="min-h-screen flex items-center pt-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="stagger-children">
            <!-- Greeting -->
            <p class="font-mono text-primary mb-2">Hello, I'm</p>

            <!-- Name -->
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              style="color: var(--text-heading);"
            >
              {{ profile.name }}
            </h1>

            <!-- Title -->
            <h2 class="text-xl sm:text-2xl font-medium mb-2 opacity-80">
              {{ profile.title }}
            </h2>

            <!-- Tagline -->
            <p class="text-lg font-medium text-primary mb-4">
              🎯 {{ profile.tagline }}
            </p>

            <!-- Bio -->
            <p class="text-lg opacity-70 mb-8 max-w-lg leading-relaxed">
              {{ profile.bio }}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4 mb-8">
              <a
                href="assets/resume.pdf"
                download
                class="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
                style="background-color: var(--color-primary); color: white;"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
              <a
                href="#projects"
                class="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style="border: 2px solid var(--color-primary); color: var(--color-primary);"
              >
                View Projects
              </a>
            </div>

            <!-- Social Cards -->
            <div id="connect" class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              @for (link of socialLinks; track link.name) {
              <a
                [href]="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="group p-4 rounded-xl transition-all duration-300 hover:scale-105 text-center"
                style="background-color: var(--bg-secondary); border: 1px solid var(--border-color);"
              >
                <div class="flex flex-col items-center gap-2">
                  @switch (link.icon) { @case ('github') {
                  <svg
                    class="w-8 h-8 group-hover:text-primary transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  } @case ('linkedin') {
                  <svg
                    class="w-8 h-8 group-hover:text-primary transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                  } @case ('twitch') {
                  <svg
                    class="w-8 h-8 group-hover:text-primary transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"
                    />
                  </svg>
                  } @case ('youtube') {
                  <svg
                    class="w-8 h-8 group-hover:text-primary transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>
                  } }
                  <span class="text-sm font-medium">{{ link.name }}</span>
                </div>
              </a>
              }
            </div>
          </div>

          <!-- Code Animation -->
          <div class="hidden lg:block">
            <app-typewriter />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  profile = PROFILE;
  socialLinks = SOCIAL_LINKS;
}
