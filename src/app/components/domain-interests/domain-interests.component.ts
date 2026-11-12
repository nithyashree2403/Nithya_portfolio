import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-domain-interests',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="domains" class="py-24 relative bg-slate-950/90 bg-grid-pattern">
      <!-- Ambient Glow Behind Section -->
      <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>🎯 Domain & Industry Specialization</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Domain Focus & <span class="gradient-text">Engineering Interests</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Targeted industry domains where backend architecture, automated data pipelines, and intelligent AI models deliver high-leverage business value.
          </p>
        </div>

        <!-- Domain Pillars Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div 
            *ngFor="let pillar of domainInterests()"
            class="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800/80 bg-slate-900/60 shadow-xl flex flex-col justify-between"
          >
            <div class="space-y-5">
              
              <!-- Header with Badge -->
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  {{ pillar.category }}
                </span>
                <span class="text-xl">
                  <span *ngIf="pillar.icon === 'shield-check'">🛡️</span>
                  <span *ngIf="pillar.icon === 'database'">🗄️</span>
                  <span *ngIf="pillar.icon === 'cpu'">⚡</span>
                </span>
              </div>

              <!-- Title & Summary -->
              <div>
                <h3 class="text-xl font-bold text-slate-100 leading-snug">
                  {{ pillar.title }}
                </h3>
                <p class="text-xs text-slate-400 mt-2 leading-relaxed">
                  {{ pillar.summary }}
                </p>
              </div>

              <!-- Specific Topic Pills -->
              <div class="space-y-2 pt-2">
                <div 
                  *ngFor="let topic of pillar.topics"
                  class="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                  <span class="font-medium">{{ topic }}</span>
                </div>
              </div>

            </div>

            <!-- Card Bottom Accent -->
            <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Applied Focus</span>
              <span class="text-sky-400 font-semibold">Active Interest</span>
            </div>

          </div>
        </div>

        <!-- Highlight Banner from Resume -->
        <div class="p-6 sm:p-8 glass-card rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-slate-900/80 shadow-2xl relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div class="space-y-2 max-w-3xl">
              <div class="inline-flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
                <span>Enterprise Healthcare & Payment Intelligence</span>
              </div>
              <h4 class="text-xl sm:text-2xl font-bold text-slate-100">
                Building AI-Powered Systems for Healthcare Claims & Payment Integrity
              </h4>
              <p class="text-sm text-slate-300 leading-relaxed">
                Combining backend software engineering, data pipeline automation, and machine learning to tackle complex claims lifecycles, payment accuracy, and pre/post-pay verification for commercial healthcare, Medicare, and Medicaid.
              </p>
            </div>

            <a 
              href="#contact" 
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-400 hover:opacity-90 transition-all shadow-md shadow-sky-500/20 whitespace-nowrap"
            >
              <span>Connect on Projects</span>
              <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class DomainInterestsComponent {
  private portfolioService = inject(PortfolioService);
  domainInterests = this.portfolioService.getDomainInterests();
}

