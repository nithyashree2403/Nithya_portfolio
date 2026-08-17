import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      <!-- Background Ambient Glow -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Intro Text & CTAs -->
          <div class="lg:col-span-7 space-y-6 text-left">
            
            <!-- Location & Availability Badge -->
            <div class="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-xs font-medium text-slate-300 shadow-md shadow-sky-500/5">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Dublin, Ireland</span>
              <span class="text-slate-600">•</span>
              <span class="text-sky-400 font-semibold">Open to AI / MLOps / Full-Stack Roles</span>
            </div>

            <!-- Title & Degree Callout -->
            <div class="space-y-2">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
                Hi, I'm <span class="gradient-text">Nithya Shree V.S</span> 👋
              </h1>
              <p class="text-xl sm:text-2xl font-bold text-slate-300 tracking-tight">
                AI/ML Engineer — Associate Engineer (Agentic / Applied AI)
              </p>
            </div>

            <!-- Bio Summary from Resume -->
            <p class="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              MSc in Information Systems at <span class="text-sky-300 font-semibold underline decoration-sky-500/50 underline-offset-4">University College Dublin (GPA 3.51/4.2)</span> on a CS & Engineering foundation from <span class="text-sky-300 font-semibold">Dayananda Sagar University (CGPA 9.12)</span>. Hands-on AI/ML, MLOps, and full-stack internship experience at <span class="text-indigo-300 font-semibold">Bosch</span>, <span class="text-indigo-300 font-semibold">Continental</span>, and <span class="text-indigo-300 font-semibold">Webstack Academy</span>.
            </p>

            <!-- Quick Specs & Tech Highlights -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-sky-300">
                ⚙️ MLOps & Agentic AI (MLflow / Kubeflow)
              </span>
              <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-indigo-300">
                ⚡ Angular 18, Flask & MERN Stack
              </span>
              <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-300">
                🐍 Python, Java, C#, TypeScript & C
              </span>
              <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-purple-300">
                🎓 Coursera, Duke, IBM & Google Certified
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#projects" 
                class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 hover:opacity-95 transition-all shadow-lg shadow-sky-500/25 group"
              >
                <span>View Projects & Engineering Work</span>
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <a 
                href="#contact" 
                class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 transition-all"
              >
                <span>Get in Touch</span>
                <svg class="w-4 h-4 ml-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>

              <a 
                href="https://github.com/nithyashree2403" 
                target="_blank" 
                rel="noopener"
                class="inline-flex items-center justify-center p-3 rounded-xl text-slate-400 hover:text-slate-100 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>

          </div>

          <!-- Right Column: Card Spotlight -->
          <div class="lg:col-span-5">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <div class="absolute -inset-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-600 rounded-3xl blur-lg opacity-30 animate-pulse-slow"></div>

              <div class="relative glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-700/60 shadow-2xl">
                
                <div class="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xl">
                      🎓
                    </div>
                    <div>
                      <h3 class="text-sm font-semibold text-slate-200">Education & Academics</h3>
                      <p class="text-xs text-sky-400 font-mono">UCD • Dublin, Ireland</p>
                    </div>
                  </div>
                  <span class="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    GPA 3.51/4.2
                  </span>
                </div>

                <div class="space-y-3">
                  <div>
                    <h4 class="text-base font-bold text-slate-100">MSc in Information Systems</h4>
                    <p class="text-xs text-sky-300 font-mono">University College Dublin (UCD) (2025–Present)</p>
                  </div>
                  <div>
                    <h4 class="text-base font-bold text-slate-100">B.Tech Computer Science</h4>
                    <p class="text-xs text-indigo-300 font-mono">Dayananda Sagar University (CGPA 9.12) (2021–2025)</p>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-2 pt-1">
                  <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span class="text-xs font-bold text-sky-400 font-mono">Bosch</span>
                    <p class="text-[10px] text-slate-400 mt-0.5">Feb 2025 – May 2025</p>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span class="text-xs font-bold text-cyan-400 font-mono">Continental</span>
                    <p class="text-[10px] text-slate-400 mt-0.5">Jul 2024 – Sep 2024</p>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span class="text-xs font-bold text-indigo-400 font-mono">WSA</span>
                    <p class="text-[10px] text-slate-400 mt-0.5">Jan 2024 – Apr 2024</p>
                  </div>
                </div>

                <div class="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-slate-800/80">
                  <span class="flex items-center space-x-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Seeking Full-Time Roles</span>
                  </span>
                  <span class="text-slate-400">Dublin / Hybrid</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  private portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;
}

