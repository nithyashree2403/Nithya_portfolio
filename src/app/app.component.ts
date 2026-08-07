import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectModalComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-300">
      <!-- Navigation Header -->
      <app-header></app-header>

      <!-- Main Page Content Sections -->
      <main>
        <app-hero></app-hero>
        <app-experience></app-experience>
        <app-projects></app-projects>
        <app-skills></app-skills>
        <app-education></app-education>
        <app-contact></app-contact>
      </main>

      <!-- Interactive Project Modal -->
      <app-project-modal></app-project-modal>

      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  title = 'Nithya Shree V.S | MLOps & Full-Stack Engineer';
}
