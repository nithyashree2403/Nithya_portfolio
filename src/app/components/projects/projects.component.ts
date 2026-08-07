import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-24 relative bg-slate-950">
      <!-- Section Divider Ambient Glow -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"></div>
      <div class="absolute right-10 top-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Heading -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <span>⚡ Projects & Engineering Accomplishments</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured <span class="gradient-text">Projects & AI Workflows</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Software engineering & MLOps projects spanning real-time demand forecasting, experiment tracking with MLflow & Kubeflow, biometric voting security, and medical computer vision.
          </p>
        </div>

        <!-- Filter Category Tabs -->
        <div class="flex flex-wrap justify-center items-center gap-2 mb-12">
          <button 
            *ngFor="let tab of filterTabs"
            (click)="activeTab.set(tab.id)"
            [class]="activeTab() === tab.id 
              ? 'px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 transition-all scale-105'
              : 'px-4 py-2 rounded-xl text-xs font-medium text-slate-400 bg-slate-900/80 border border-slate-800 hover:text-slate-200 hover:bg-slate-800 transition-all'"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            *ngFor="let project of filteredProjects()"
            class="group glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300"
          >
            <!-- Card Ambient Gradient Background -->
            <div class="absolute inset-0 bg-gradient-to-br {{ project.gradient }} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>

            <div class="relative z-10 space-y-5">
              
              <!-- Top Row: Badge & Category -->
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30 font-mono">
                  {{ project.badge || project.categoryLabel }}
                </span>

                <div class="flex items-center space-x-2">
                  <a 
                    [href]="project.githubUrl"
                    target="_blank"
                    rel="noopener"
                    class="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors"
                    title="View Source Code on GitHub"
                  >
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Title & Subtitle -->
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-xs text-sky-400 font-mono mt-1">
                  {{ project.subtitle }}
                </p>
              </div>

              <!-- Description -->
              <p class="text-sm text-slate-300 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Key Metrics Grid -->
              <div class="grid grid-cols-3 gap-2 py-2">
                <div *ngFor="let metric of project.metrics" class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <div class="text-sm font-bold text-sky-400 font-mono">{{ metric.value }}</div>
                  <div class="text-[10px] text-slate-400 mt-0.5">{{ metric.label }}</div>
                </div>
              </div>

              <!-- Tech Stack Badges -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  *ngFor="let tag of project.tags"
                  class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/90 text-slate-300 border border-slate-800"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Card Bottom Action Buttons -->
            <div class="relative z-10 pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <button 
                (click)="openModal(project)"
                class="inline-flex items-center text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group/btn"
              >
                <span>Architecture & Details</span>
                <svg class="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              <a 
                *ngIf="project.githubUrl"
                [href]="project.githubUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <span>GitHub Code</span>
                <svg class="w-3.5 h-3.5 ml-1 text-slate-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  
  projects = this.portfolioService.getProjects();
  activeTab = signal<string>('all');

  filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'mlops', label: 'MLOps & Pipelines' },
    { id: 'fullstack', label: 'Full-Stack & Web' },
    { id: 'ai', label: 'AI & Computer Vision' }
  ];

  filteredProjects = computed(() => {
    const tab = this.activeTab();
    if (tab === 'all') return this.projects();
    return this.projects().filter(p => p.category === tab);
  });

  openModal(project: Project) {
    this.portfolioService.openProjectModal(project);
  }
}
