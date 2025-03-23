import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';

interface Skill {
  name: string;
  level: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, EditSkillsComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: 'Angular', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML & CSS', level: 'Expert' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' }
  ];

  showEditPopup: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fetchSkillsData();
  }

  fetchSkillsData(): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.getSkillsData().subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {
          this.skills = data;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching skills data:', err);
        this.error = 'Failed to load skills data. Using default content.';
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

  saveSkills(newSkills: Skill[]): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.updateSkillsData(newSkills).subscribe({
      next: () => {
        this.skills = newSkills;
        this.isLoading = false;
        this.showEditPopup = false;
      },
      error: (err) => {
        console.error('Error updating skills data:', err);
        this.error = 'Failed to update skills data.';
        this.isLoading = false;
      }
    });
  }
}
