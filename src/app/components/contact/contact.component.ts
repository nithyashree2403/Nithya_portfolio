import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-24 relative bg-slate-950 bg-radial-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <span>📬 Let's Connect</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Get in <span class="gradient-text">Touch</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Interested in discussing MLOps roles, full-stack engineering opportunities, or potential technical collaborations in Dublin or remotely? Drop a message!
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          <!-- Contact Info Cards Column -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800/80 bg-slate-900/60">
              <h3 class="text-xl font-bold text-slate-100">Contact Details</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Currently based in Dublin, Ireland and actively open to MLOps, AI & Full-Stack engineering roles.
              </p>

              <!-- Details List -->
              <div class="space-y-4 pt-2">
                
                <!-- Email Pill -->
                <a 
                  href="mailto:nithyashree242003@gmail.com" 
                  class="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-950/80 border border-sky-500/30 hover:border-sky-500/60 transition-all group shadow-sm shadow-sky-500/10"
                  title="Click to send email directly to nithyashree242003@gmail.com"
                >
                  <div class="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 text-lg group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div class="overflow-hidden">
                    <span class="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <span class="text-xs sm:text-sm font-semibold text-sky-300 truncate block group-hover:text-sky-200">nithyashree242003&#64;gmail.com</span>
                  </div>
                </a>

                <!-- Phone Pill -->
                <a href="tel:+353852193644" class="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 transition-colors">
                  <div class="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg">
                    📞
                  </div>
                  <div>
                    <span class="text-[11px] font-mono text-slate-400 block">Phone Number</span>
                    <span class="text-xs sm:text-sm font-semibold text-slate-200">+353 852193644</span>
                  </div>
                </a>

                <!-- Location Pill -->
                <div class="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-lg">
                    📍
                  </div>
                  <div>
                    <span class="text-[11px] font-mono text-slate-400 block">Current Location</span>
                    <span class="text-xs sm:text-sm font-semibold text-slate-200">Dublin, Ireland</span>
                  </div>
                </div>

                <!-- Degree Pill -->
                <div class="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg">
                    🎓
                  </div>
                  <div>
                    <span class="text-[11px] font-mono text-slate-400 block">Degree & GPA</span>
                    <span class="text-xs sm:text-sm font-semibold text-emerald-400">MSc UCD (GPA 3.51/4.2)</span>
                  </div>
                </div>

              </div>

              <!-- Social Links -->
              <div class="pt-4 border-t border-slate-800/80 flex items-center space-x-3">
                <a 
                  href="https://github.com/nithyashree2403" 
                  target="_blank" 
                  rel="noopener"
                  class="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener"
                  class="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          <!-- Interactive Form Column -->
          <div class="lg:col-span-7">
            <div class="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 bg-slate-900/60 shadow-xl">
              
              <form (ngSubmit)="sendMessage()" #contactForm="ngForm" class="space-y-5">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="space-y-2">
                    <label class="block text-xs font-mono font-medium text-slate-300">Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      [(ngModel)]="formData.name" 
                      required 
                      placeholder="e.g. Hiring Manager"
                      class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm transition-colors"
                    />
                  </div>

                  <div class="space-y-2">
                    <label class="block text-xs font-mono font-medium text-slate-300">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      [(ngModel)]="formData.email" 
                      required 
                      placeholder="e.g. hr@company.com"
                      class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="block text-xs font-mono font-medium text-slate-300">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    [(ngModel)]="formData.subject" 
                    placeholder="e.g. Full-Stack / MLOps Opportunity in Dublin"
                    class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm transition-colors"
                  />
                </div>

                <div class="space-y-2">
                  <label class="block text-xs font-mono font-medium text-slate-300">Message *</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    [(ngModel)]="formData.message" 
                    required 
                    placeholder="Write your message here..."
                    class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <!-- Feedback alert -->
                <div *ngIf="isSubmitted()" class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium space-y-1 animate-fadeIn">
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="font-bold">Opening your email app to send directly to nithyashree242003&#64;gmail.com!</span>
                  </div>
                  <p class="text-[11px] text-slate-300 pl-7">
                    If your email client didn't open automatically, <a [href]="getMailtoLink()" class="text-sky-300 underline font-semibold">click here to send directly</a>.
                  </p>
                </div>

                <!-- Submit Action Buttons -->
                <div class="space-y-3">
                  <button 
                    type="submit" 
                    [disabled]="!contactForm.form.valid || isSending()"
                    class="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center space-x-2"
                  >
                    <span *ngIf="!isSending()">Send via Email Client</span>
                    <span *ngIf="isSending()">Preparing Email...</span>
                    <svg *ngIf="!isSending()" class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </button>

                  <a 
                    [href]="getMailtoLink()" 
                    class="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-sky-300 bg-slate-950 border border-slate-800 hover:border-sky-500/40 transition-colors flex items-center justify-center space-x-2 text-center"
                  >
                    <span>Direct Email: nithyashree242003&#64;gmail.com</span>
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSending = signal<boolean>(false);
  isSubmitted = signal<boolean>(false);

  getMailtoLink(): string {
    const subject = encodeURIComponent(this.formData.subject || 'Portfolio Inquiry from ' + (this.formData.name || 'Visitor'));
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nSubject: ${this.formData.subject}\n\nMessage:\n${this.formData.message}`
    );
    return `mailto:nithyashree242003@gmail.com?subject=${subject}&body=${body}`;
  }

  sendMessage() {
    this.isSending.set(true);
    
    // Open default mail client (Gmail, Outlook, Apple Mail) pre-filled with exact subject & body
    window.location.href = this.getMailtoLink();

    setTimeout(() => {
      this.isSending.set(false);
      this.isSubmitted.set(true);
    }, 800);
  }
}
