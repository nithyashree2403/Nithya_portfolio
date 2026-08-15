import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="py-12 bg-slate-950 border-t border-slate-800/80 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <!-- Brand & Copyright -->
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px]">
              <div class="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <span class="font-mono text-sky-400 font-bold text-xs">&lt;N/&gt;</span>
              </div>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-200">Nithya Shree V.S</span>
              <span class="text-xs text-slate-500 block">© 2026 • AI/ML Engineer (Agentic / Applied AI)</span>
            </div>
          </div>

          <!-- Built With Tech Pills -->
          <div class="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <span>Built with</span>
            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-sky-400">Angular 18</span>
            <span>&</span>
            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">Tailwind CSS</span>
          </div>

          <!-- Back to Top Button -->
          <div>
            <button 
              (click)="scrollToTop()"
              class="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-medium text-slate-300 hover:text-sky-400 transition-all"
            >
              <span>Back to Top</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              </svg>
            </button>
          </div>

        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
