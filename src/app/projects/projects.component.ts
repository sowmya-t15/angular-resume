import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';

interface Project {
  title: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, EditProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    { title: 'Portfolio Website', description: 'An interactive portfolio website built with Angular.' },
    { title: 'E-commerce App', description: 'A fully responsive online shopping platform using Angular and Firebase.' },
    { title: 'Task Manager', description: 'A task management application with authentication and API integration.' }
  ];

  showEditPopup: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fetchProjectsData();
  }

  fetchProjectsData(): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.getProjectsData().subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {
          this.projects = data;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching projects data:', err);
        this.error = 'Failed to load projects data. Using default content.';
        this.isLoading = false;
      }
    });
  }

  openEditPopup(): void {
    this.showEditPopup = true;
  }

  closeEditPopup(): void {
    this.showEditPopup = false;
  }

  saveProjects(newProjects: Project[]): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.updateProjectsData(newProjects).subscribe({
      next: () => {
        this.projects = newProjects;
        this.isLoading = false;
        this.showEditPopup = false;
      },
      error: (err) => {
        console.error('Error updating projects data:', err);
        this.error = 'Failed to update projects data.';
        this.isLoading = false;
      }
    });
  }
}
