import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-card bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          
          <!-- Logo -->
          <a href="#" class="flex items-center space-x-3 group">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div class="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <span class="font-mono text-sky-400 font-bold text-lg">&lt;N/&gt;</span>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="text-slate-100 font-bold tracking-tight text-base group-hover:text-sky-400 transition-colors">Nithya Shree V.S</span>
              <span class="text-[11px] font-mono text-slate-400">AI/ML & MLOps Engineer</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a 
              *ngFor="let item of navItems" 
              [href]="item.href"
              class="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-900/60 transition-all"
            >
              {{ item.label }}
            </a>
          </nav>

          <!-- Action CTA & Mobile Menu Toggle -->
          <div class="flex items-center space-x-3">
            <a 
              href="#contact" 
              class="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase bg-sky-500/10 text-sky-400 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-500/60 transition-all shadow-sm shadow-sky-500/10"
            >
              Contact Me
            </a>

            <!-- Mobile Hamburger Button -->
            <button 
              (click)="toggleMenu()"
              class="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg *ngIf="!isMenuOpen()" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg *ngIf="isMenuOpen()" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div *ngIf="isMenuOpen()" class="md:hidden py-4 border-t border-slate-800/80 space-y-2 animate-fadeIn">
          <a 
            *ngFor="let item of navItems" 
            [href]="item.href"
            (click)="closeMenu()"
            class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-900/80 transition-all"
          >
            {{ item.label }}
          </a>
          <div class="pt-2 px-4">
            <a 
              href="#contact" 
              (click)="closeMenu()"
              class="block w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = signal<boolean>(false);

  navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
