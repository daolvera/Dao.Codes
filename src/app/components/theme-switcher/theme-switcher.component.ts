import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  template: `
    <button
      (click)="themeService.toggleTheme()"
      class="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 hover:scale-110 cursor-pointer"
      style="background-color: var(--bg-secondary); border: 1px solid var(--border-color);"
      [title]="
        themeService.isDarkMode()
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      "
    >
      <span class="text-xl">{{ themeService.isDarkMode() ? '☀️' : '🌙' }}</span>
    </button>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);
}
