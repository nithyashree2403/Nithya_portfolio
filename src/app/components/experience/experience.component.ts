import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-24 relative bg-slate-950/90 bg-grid-pattern">
      <!-- Ambient Glow -->
      <div class="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
            <span>💼 Professional Engineering Experience</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Work Experience & <span class="gradient-text">Engineering Roles</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Hands-on software development, backend systems, automated ETL pipelines, and MLOps workflows in tier-1 global engineering environments.
          </p>
        </div>

        <!-- Experience Timeline Cards -->
        <div class="max-w-4xl mx-auto space-y-10">
          <div 
            *ngFor="let exp of experiences()"
            class="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800/80 hover:border-slate-700/80 transition-all bg-slate-900/60 shadow-xl"
          >
            <!-- Top Line: Company & Role -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="text-2xl font-bold text-slate-100">{{ exp.company }}</h3>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    {{ exp.badge }}
                  </span>
                </div>
                <p class="text-base font-semibold text-sky-300 font-mono">{{ exp.role }}</p>
              </div>

              <div class="text-left md:text-right font-mono text-xs text-slate-400 space-y-1">
                <div class="text-slate-300 font-medium">📍 {{ exp.location }}</div>
                <div class="text-sky-400 font-semibold">📅 {{ exp.period }}</div>
              </div>
            </div>

            <!-- Description Bullet Points -->
            <ul class="space-y-3">
              <li *ngFor="let bullet of exp.description" class="flex items-start text-sm text-slate-300 leading-relaxed">
                <span class="text-sky-400 mr-3 font-bold text-base leading-none mt-0.5">▹</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>

            <!-- Tech Badges -->
            <div class="pt-4 border-t border-slate-800/80">
              <div class="text-xs font-mono text-slate-400 mb-2.5">Key Technologies & Frameworks:</div>
              <div class="flex flex-wrap gap-2">
                <span 
                  *ngFor="let tech of exp.technologies"
                  class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {
  private portfolioService = inject(PortfolioService);
  experiences = this.portfolioService.getExperiences();
}
