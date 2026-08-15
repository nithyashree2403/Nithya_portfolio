import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="py-24 relative bg-slate-950">
      <!-- Section Divider Glow -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>🎓 Academic Credentials & Certifications</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education & <span class="gradient-text">Certifications</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Academic qualifications spanning UCD (GPA 3.51/4.2) and Dayananda Sagar University (CGPA 9.12/10), Senior Secondary & Secondary CBSE education, complemented by industry certifications.
          </p>
        </div>

        <!-- Education Degrees Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          
          <div 
            *ngFor="let edu of educationList()"
            class="glass-card rounded-2xl p-6 sm:p-7 space-y-5 border border-slate-800/80 bg-slate-900/60 shadow-xl flex flex-col justify-between"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  {{ edu.badge }}
                </span>
                <span class="text-xs font-mono text-slate-400">{{ edu.period }}</span>
              </div>

              <div class="space-y-1">
                <h3 class="text-xl font-bold text-slate-100">{{ edu.institution }}</h3>
                <p class="text-xs text-sky-400 font-medium">{{ edu.location }}</p>
                <p class="text-base font-bold text-slate-200 mt-1">{{ edu.degree }}</p>
              </div>

              <div class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <span class="text-xs text-slate-400 font-mono">{{ edu.gradeLabel }}</span>
                <span class="text-base font-bold text-sky-400 font-mono">{{ edu.grade }}</span>
              </div>

              <p class="text-xs text-slate-300 leading-relaxed">
                {{ edu.details }}
              </p>
            </div>

            <div class="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Status: {{ edu.status }}</span>
              <span class="text-emerald-400">📍 {{ edu.location }}</span>
            </div>
          </div>

        </div>

        <!-- Certifications Showcase Grid -->
        <div id="certifications" class="max-w-6xl mx-auto space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-100">Professional Certifications</h3>
            <p class="text-xs text-slate-400 font-mono mt-1">Verified industry programs & credentials</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              *ngFor="let cert of certifications()"
              class="p-4 rounded-xl glass-card border border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/80 transition-all flex flex-col justify-between"
            >
              <div class="space-y-2">
                <div class="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{{ cert.issuer }}</span>
                  <span class="text-sky-400 font-semibold">{{ cert.year }}</span>
                </div>
                <h4 class="text-sm font-bold text-slate-200 leading-snug">{{ cert.title }}</h4>
              </div>

              <div class="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-sky-300 border border-slate-800">
                  {{ cert.badge }}
                </span>
                <span class="text-emerald-400 text-xs">✓ Verified</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements & Positions of Responsibility -->
        <div class="max-w-6xl mx-auto mt-16 p-6 sm:p-8 glass-card rounded-2xl border border-slate-800 bg-slate-900/40">
          <h3 class="text-lg font-bold text-slate-100 mb-4 flex items-center space-x-2">
            <span>🎭 Cultural Achievements & Leadership</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <span class="text-xs font-mono text-sky-400">15 August 2024 • Dubai, UAE</span>
              <h4 class="text-sm font-bold text-slate-200">Bharatanatyam Performance – Bharat Utsav, Dubai, UAE</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Performed classical dance at Bharat Utsav, Dubai's Independence Day festival, before an international audience.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <span class="text-xs font-mono text-indigo-400">May 2024 • Bengaluru, India</span>
              <h4 class="text-sm font-bold text-slate-200">Volunteer & Coordinator – DSU Engineering Expo</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Coordinated project demonstrations, technical evaluations, and event operations for Dayananda Sagar University's annual engineering project exhibition.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class EducationComponent {
  private portfolioService = inject(PortfolioService);
  educationList = this.portfolioService.getEducation();
  certifications = this.portfolioService.getCertifications();
}

