import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

export interface ThemeInfo {
  id: Theme;
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly themes: ThemeInfo[] = [
    { id: 'light', name: 'Light', icon: '☀️' },
    { id: 'dark', name: 'Dark', icon: '🌙' },
  ];

  currentTheme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('portfolio-theme', theme);
    });
  }

  private getInitialTheme(): Theme {
    const stored = localStorage.getItem('portfolio-theme') as Theme;
    if (stored && this.themes.some((t) => t.id === stored)) {
      return stored;
    }
    // Check system preference
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }

  toggleTheme(): void {
    this.currentTheme.set(this.currentTheme() === 'light' ? 'dark' : 'light');
  }

  isDarkMode(): boolean {
    return this.currentTheme() === 'dark';
  }
}
