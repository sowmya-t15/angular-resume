import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Contact {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  @Input() contactInfo: Contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  @Output() saveContact = new EventEmitter<Contact>();
  @Output() closePopup = new EventEmitter<void>();

  editableContact: Contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  ngOnInit(): void {
    // Create a deep copy of the contact info to avoid modifying the original
    this.editableContact = JSON.parse(JSON.stringify(this.contactInfo));
  }

  save(): void {
    // Validate that all required fields are filled
    if (!this.editableContact.name.trim() || 
        !this.editableContact.email.trim() || 
        !this.editableContact.phone.trim()) {
      alert('Please fill in all required fields (Name, Email, and Phone)');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.editableContact.email)) {
      alert('Please enter a valid email address');
      return;
    }

    this.saveContact.emit(this.editableContact);
  }

  cancel(): void {
    this.closePopup.emit();
  }
}
