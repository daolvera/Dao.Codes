import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300"
      style="background-color: color-mix(in srgb, var(--bg-primary) 80%, transparent); border-color: var(--border-color);"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo / Name -->
          <a
            href="#"
            class="flex items-center gap-2 font-mono font-bold text-lg hover:text-primary transition-colors"
          >
            <span class="text-primary">&lt;</span>
            <span>{{ profile.name.split(' ')[0] }}</span>
            <span class="text-primary">/&gt;</span>
          </a>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center gap-8">
            <a href="#projects" class="nav-link">Projects</a>
          </nav>

          <!-- Theme Switcher -->
          <app-theme-switcher />
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      .nav-link {
        position: relative;
        font-weight: 500;
        transition: color 0.2s ease;
      }

      .nav-link:hover {
        color: var(--color-primary);
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-primary);
        transition: width 0.2s ease;
      }

      .nav-link:hover::after {
        width: 100%;
      }
    `,
  ],
})
export class HeaderComponent {
  profile = PROFILE;
}
