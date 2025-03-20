import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, SkillsComponent, AboutComponent, ExperienceComponent, EducationComponent, ProjectsComponent], // Add necessary imports
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  showResume = false;

  showResumePage() {
    this.showResume = true; // Display the resume when button is clicked
  }
}


