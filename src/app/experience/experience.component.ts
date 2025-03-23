import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';

interface Experience {
  company: string;
  role: string;
  duration: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, EditExperienceComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    { company: 'Company A', role: 'Software Engineer', duration: '2022 - Present' },
    { company: 'Company B', role: 'Frontend Developer', duration: '2020 - 2022' },
    { company: 'Company C', role: 'Intern', duration: '2019 - 2020' }
  ];

  showEditPopup: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fetchExperienceData();
  }

  fetchExperienceData(): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.getExperienceData().subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {
          this.experiences = data;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching experience data:', err);
        this.error = 'Failed to load experience data. Using default content.';
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

  saveExperiences(newExperiences: Experience[]): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.updateExperienceData(newExperiences).subscribe({
      next: () => {
        this.experiences = newExperiences;
        this.isLoading = false;
        this.showEditPopup = false;
      },
      error: (err) => {
        console.error('Error updating experience data:', err);
        this.error = 'Failed to update experience data.';
        this.isLoading = false;
      }
    });
  }
}
