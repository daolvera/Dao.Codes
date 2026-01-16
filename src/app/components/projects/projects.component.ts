import { Component } from '@angular/core';
import { PROJECTS, Project } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section
      id="projects"
      class="py-20"
      style="background-color: var(--bg-secondary);"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            class="text-3xl sm:text-4xl font-bold mb-4"
            style="color: var(--text-heading);"
          >
            Featured Projects
          </h2>
          <div
            class="w-20 h-1 mx-auto rounded-full"
            style="background-color: var(--color-primary);"
          ></div>
          <p class="mt-4 opacity-60 max-w-2xl mx-auto">
            A selection of projects I've worked on. Check out my GitHub for
            more.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects; track project.title) {
          <article
            class="rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style="background-color: var(--bg-card); border: 1px solid var(--border-color);"
          >
            <div class="p-6">
              <h3
                class="text-xl font-bold mb-2"
                style="color: var(--text-heading);"
              >
                {{ project.title }}
              </h3>

              <p class="text-sm opacity-70 mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                @for (tech of project.technologies; track tech) {
                <span
                  class="px-2 py-0.5 text-xs rounded font-medium"
                  style="background-color: var(--bg-secondary); color: var(--color-primary);"
                >
                  {{ tech }}
                </span>
                }
              </div>

              <!-- Links -->
              <div class="flex gap-4">
                @if (project.githubUrl) {
                <a
                  [href]="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  View Code
                </a>
                } @if (project.liveUrl) {
                <a
                  [href]="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
                }
              </div>
            </div>
          </article>
          }
        </div>

        <!-- View More -->
        <div class="text-center mt-12">
          <a
            href="https://github.com/daolvera"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style="border: 2px solid var(--color-primary); color: var(--color-primary);"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
