import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { EditEducationComponent } from './edit-education/edit-education.component';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, EditEducationComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Aurora University',
      year: '2023 - 2025',
      description: 'Focused on advanced software development, algorithms, and database management.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Shanthinikethan degree College',
      year: '2020 - 2023',
      description: 'Gained strong foundational knowledge in programming, data structures, and networking.'
    }
  ];

  showEditPopup: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fetchEducationData();
  }

  fetchEducationData(): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.getEducationData().subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {
          this.educationList = data;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching education data:', err);
        this.error = 'Failed to load education data. Using default content.';
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

  saveEducation(newEducationList: Education[]): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.updateEducationData(newEducationList).subscribe({
      next: () => {
        this.educationList = newEducationList;
        this.isLoading = false;
        this.showEditPopup = false;
      },
      error: (err) => {
        console.error('Error updating education data:', err);
        this.error = 'Failed to update education data.';
        this.isLoading = false;
      }
    });
  }
}
