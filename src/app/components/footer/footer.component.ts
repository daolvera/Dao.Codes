import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer
      class="border-t py-8 mt-20"
      style="border-color: var(--border-color); background-color: var(--bg-secondary);"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="font-medium mb-2">© 2026 Dao Codes</p>
        <p class="text-primary font-mono">Happy Coding! 🚀</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
