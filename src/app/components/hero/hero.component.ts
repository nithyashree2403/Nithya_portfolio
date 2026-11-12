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
              <span>Bengaluru, India • Dublin, Ireland</span>
              <span class="text-slate-600">•</span>
              <span class="text-sky-400 font-semibold">Backend Development & Data Platforms</span>
            </div>

            <!-- Title & Degree Callout -->
            <div class="space-y-2">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
                Hi, I'm <span class="gradient-text">Nithya Shree V S</span> 👋
              </h1>
              <p class="text-lg sm:text-xl md:text-2xl font-bold text-sky-300 tracking-tight">
                Software Engineer | Backend Development | Data Platform Engineering
              </p>
            </div>

            <!-- Bio Summary from Resume -->
            <p class="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Software Engineer with an MSc in Information Systems (<span class="text-sky-300 font-semibold underline decoration-sky-500/50 underline-offset-4">GPA: 3.46/4.2</span>) at University College Dublin and a B.Tech in Computer Science and Engineering (<span class="text-sky-300 font-semibold">CGPA: 9.12/10</span>) at Dayananda Sagar University. Hands-on experience across Python software development, backend systems, data engineering, MLOps, and AI-driven applications at <span class="text-indigo-300 font-semibold">Bosch</span> and <span class="text-indigo-300 font-semibold">Continental</span>.
            </p>

            <!-- Quick Specs & Tech Highlights from Resume -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-sky-300">
                ⚡ Python, Flask, RESTful APIs & Microservices
              </span>
              <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-300">
                ⚙️ ETL Pipelines, Docker & Kubernetes (Minikube)
              </span>
              <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-indigo-300">
                🚀 Kubeflow, MLflow & CI/CD GitHub Actions
              </span>
              <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-purple-300">
                🏥 Healthcare Payment Intelligence & Claims Processing
              </span>
              <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-emerald-300">
                🤖 Emerging Agentic AI & LLM Prototyping
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#experience" 
                class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 hover:opacity-95 transition-all shadow-lg shadow-sky-500/25 group"
              >
                <span>View Work Experience</span>
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <a 
                href="#projects" 
                class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 transition-all"
              >
                <span>Explore Projects</span>
                <svg class="w-4 h-4 ml-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>

              <a 
                href="#contact" 
                class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 transition-all"
              >
                <span>Contact Me</span>
                <svg class="w-4 h-4 ml-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>

          </div>

          <!-- Right Column: Card Spotlight -->
          <div class="lg:col-span-5">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <div class="absolute -inset-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-600 rounded-3xl blur-lg opacity-30 animate-pulse-slow"></div>

              <div class="relative glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-700/60 shadow-2xl">
                
                <!-- Education Spotlight -->
                <div class="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xl">
                      🎓
                    </div>
                    <div>
                      <h3 class="text-sm font-semibold text-slate-200">Education & Academics</h3>
                      <p class="text-xs text-sky-400 font-mono">Dublin, Ireland • Bengaluru, India</p>
                    </div>
                  </div>
                  <span class="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    GPA 3.46 / 4.2
                  </span>
                </div>

                <div class="space-y-4">
                  <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <div class="flex items-center justify-between">
                      <h4 class="text-sm font-bold text-slate-100">MSc in Information Systems</h4>
                      <span class="text-xs font-mono text-emerald-400 font-bold">GPA 3.46/4.2</span>
                    </div>
                    <p class="text-xs text-sky-300 font-mono">University College Dublin (UCD) • 2025–2026</p>
                  </div>

                  <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <div class="flex items-center justify-between">
                      <h4 class="text-sm font-bold text-slate-100">B.Tech Computer Science and Engineering</h4>
                      <span class="text-xs font-mono text-emerald-400 font-bold">CGPA 9.12/10</span>
                    </div>
                    <p class="text-xs text-indigo-300 font-mono">Dayananda Sagar University • 2021–2025</p>
                  </div>
                </div>

                <!-- Engineering Internships Highlights -->
                <div class="grid grid-cols-2 gap-3 pt-1">
                  <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
                    <span class="text-xs font-bold text-sky-400 font-mono block">Bosch Global</span>
                    <p class="text-[11px] font-semibold text-slate-200 mt-0.5">AI Engineering Intern</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">Feb 2025 – May 2025</p>
                  </div>
                  <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
                    <span class="text-xs font-bold text-cyan-400 font-mono block">Continental</span>
                    <p class="text-[11px] font-semibold text-slate-200 mt-0.5">Data & MLOps Intern</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">Jul 2024 – Sep 2024</p>
                  </div>
                </div>

                <!-- Contact Fast Links -->
                <div class="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-slate-800/80">
                  <span class="flex items-center space-x-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>nithyashree242003&#64;gmail.com</span>
                  </span>
                  <span class="text-sky-400 font-semibold">+353 852193644</span>
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
