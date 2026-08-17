import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="project()"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
    >
      <!-- Backdrop Overlay -->
      <div 
        (click)="close()"
        class="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
      ></div>

      <!-- Modal Content Window -->
      <div class="relative z-10 w-full max-w-3xl glass-card rounded-2xl border border-slate-700/80 shadow-2xl bg-slate-900/95 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        <!-- Modal Header -->
        <div class="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-950/60">
          <div>
            <div class="flex items-center space-x-2">
              <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                {{ project()?.badge || project()?.categoryLabel }}
              </span>
              <span *ngIf="project()?.date" class="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-950/80 text-slate-400 border border-slate-800">
                📅 {{ project()?.date }}
              </span>
            </div>
            <h3 class="text-2xl font-bold text-slate-100 mt-2">
              {{ project()?.title }}
            </h3>
            <p class="text-xs text-sky-400 font-mono mt-1">
              {{ project()?.subtitle }}
            </p>
          </div>

          <button 
            (click)="close()"
            class="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 border border-slate-700/60 transition-colors"
            aria-label="Close modal"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Modal Body Scrollable -->
        <div class="p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1 text-left">
          
          <!-- Long Description -->
          <div>
            <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">Overview</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              {{ project()?.longDescription || project()?.description }}
            </p>
          </div>

          <!-- Key Metrics -->
          <div>
            <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">Performance & Impact</h4>
            <div class="grid grid-cols-3 gap-3">
              <div *ngFor="let metric of project()?.metrics" class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div class="text-base font-bold text-sky-400 font-mono">{{ metric.value }}</div>
                <div class="text-xs text-slate-400 mt-0.5">{{ metric.label }}</div>
              </div>
            </div>
          </div>

          <!-- Architecture Highlights -->
          <div>
            <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">Architectural Highlights</h4>
            <ul class="space-y-2.5">
              <li *ngFor="let item of project()?.architectureHighlights" class="flex items-start text-xs sm:text-sm text-slate-300">
                <span class="text-sky-400 mr-2.5 font-bold">▹</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Tech Stack Tags -->
          <div>
            <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">Tech Stack & Infrastructure</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                *ngFor="let tag of project()?.tags"
                class="px-3 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
              >
                {{ tag }}
              </span>
            </div>
          </div>

        </div>

        <!-- Modal Footer Actions -->
        <div class="p-5 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <button 
            (click)="close()"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800 transition-colors"
          >
            Close Window
          </button>

          <div class="flex items-center space-x-3">
            <a 
              [href]="project()?.githubUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <span>GitHub Code</span>
              <svg class="w-3.5 h-3.5 ml-1.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a 
              *ngIf="project()?.liveUrl"
              [href]="project()?.liveUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20 transition-colors"
            >
              <span>Live Application</span>
              <svg class="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  `
})
export class ProjectModalComponent {
  private portfolioService = inject(PortfolioService);

  project = this.portfolioService.selectedProject;

  close() {
    this.portfolioService.closeProjectModal();
  }
}
