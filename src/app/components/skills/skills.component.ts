import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24 relative bg-slate-950/80 bg-grid-pattern">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
            <span>🛠 Core Technical Skills Matrix</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical <span class="gradient-text">Skills & Competencies</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            A comprehensive matrix of programming languages, backend frameworks, data engineering architectures, cloud tooling, and collaboration practices.
          </p>
        </div>

        <!-- Skill Categories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            *ngFor="let category of categories()"
            class="glass-card rounded-2xl p-6 sm:p-7 space-y-5 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            <div class="space-y-5">
              
              <!-- Category Header -->
              <div class="flex items-center space-x-3.5">
                <div class="w-11 h-11 rounded-xl bg-gradient-to-tr {{ category.gradient }} p-[1px] shadow-lg shadow-sky-500/10 flex-shrink-0">
                  <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-lg">
                    <span *ngIf="category.icon === 'code'">💻</span>
                    <span *ngIf="category.icon === 'server'">⚙️</span>
                    <span *ngIf="category.icon === 'database'">🗄️</span>
                    <span *ngIf="category.icon === 'cloud'">☁️</span>
                    <span *ngIf="category.icon === 'git-branch'">🔄</span>
                    <span *ngIf="category.icon === 'brain'">🧠</span>
                    <span *ngIf="category.icon === 'users'">🤝</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-base font-bold text-slate-100 leading-snug">
                    {{ category.title }}
                  </h3>
                  <p class="text-[11px] text-slate-400 mt-0.5">
                    {{ category.description }}
                  </p>
                </div>
              </div>

              <!-- Skills List with Badges & Progress Bars -->
              <div class="space-y-3.5 pt-1">
                <div *ngFor="let skill of category.skills" class="space-y-1">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-medium text-slate-200">{{ skill.name }}</span>
                    <span *ngIf="skill.badge" class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-sky-400 border border-slate-800">
                      {{ skill.badge }}
                    </span>
                  </div>
                  <!-- Progress Bar -->
                  <div class="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800/80 overflow-hidden">
                    <div 
                      class="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-1000"
                      [style.width.%]="skill.level"
                    ></div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Footer Badge -->
            <div class="pt-3 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Production & Academic Tested</span>
              <span class="text-emerald-400 font-semibold">✓ Verified</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  categories = this.portfolioService.getSkillCategories();
}
