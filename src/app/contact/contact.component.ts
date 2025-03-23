import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { EditContactComponent } from './edit-contact/edit-contact.component';

interface Contact {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, EditContactComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactInfo: Contact = {
    name: "sowmya",
    email: "tsowmya111@gmail.com",
    phone: "+123456789",
    message: "Feel free to reach out for collaboration or queries."
  };

  showEditPopup: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fetchContactData();
  }

  fetchContactData(): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.getContactData().subscribe({
      next: (data) => {
        if (data) {
          this.contactInfo = data;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching contact data:', err);
        this.error = 'Failed to load contact data. Using default content.';
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

  saveContact(newContact: Contact): void {
    this.isLoading = true;
    this.error = null;
    
    this.firebaseService.updateContactData(newContact).subscribe({
      next: () => {
        this.contactInfo = newContact;
        this.isLoading = false;
        this.showEditPopup = false;
      },
      error: (err) => {
        console.error('Error updating contact data:', err);
        this.error = 'Failed to update contact data.';
        this.isLoading = false;
      }
    });
  }
}
