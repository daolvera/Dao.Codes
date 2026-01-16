import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ProjectsComponent, FooterComponent],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-projects />
    </main>
    <app-footer />
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    // Initialize theme on app start
    document.documentElement.setAttribute(
      'data-theme',
      this.themeService.currentTheme()
    );
  }
}
