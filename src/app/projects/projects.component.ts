import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Portfolio Website', description: 'An interactive portfolio website built with Angular.' },
    { title: 'E-commerce App', description: 'A fully responsive online shopping platform using Angular and Firebase.' },
    { title: 'Task Manager', description: 'A task management application with authentication and API integration.' }
  ];
}
