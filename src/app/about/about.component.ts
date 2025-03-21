import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { EditAboutComponent } from './edit-about/edit-about.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, EditAboutComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutTitle: string = "About Me";
  aboutDescription: string = "I am an MCA student passionate about software development, constantly enhancing my knowledge in coding, logical thinking, and problem-solving. I actively engage in hands-on projects, exploring various technologies to deepen my understanding of programming concepts. My approach to work is a blend of dedication and smart thinking, allowing me to efficiently tackle challenges and complete tasks within deadlines.";
  
  showEditPopup: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fetchAboutData();
  }

  fetchAboutData(): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.getAboutData().subscribe({
      next: (data) => {
        if (data && data.description) {
          this.aboutDescription = data.description;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching about data:', err);
        this.error = 'Failed to load about data. Using default content.';
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

  saveDescription(newDescription: string): void {
    this.isLoading = true;
    this.error = null;
    
    const aboutData = {
      title: this.aboutTitle,
      description: newDescription
    };
    
    this.firebaseService.updateAboutData(aboutData).subscribe({
      next: () => {
        this.aboutDescription = newDescription;
        this.isLoading = false;
        this.showEditPopup = false;
      },
      error: (err) => {
        console.error('Error updating about data:', err);
        this.error = 'Failed to update about data.';
        this.isLoading = false;
      }
    });
  }
}
