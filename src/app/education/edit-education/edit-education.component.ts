import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

@Component({
  selector: 'app-edit-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent {
  @Input() educationList: Education[] = [];
  @Output() saveEducation = new EventEmitter<Education[]>();
  @Output() closePopup = new EventEmitter<void>();

  editableEducationList: Education[] = [];

  ngOnInit(): void {
    // Create a deep copy of the education list to avoid modifying the original
    this.editableEducationList = JSON.parse(JSON.stringify(this.educationList));
  }

  addEducation(): void {
    this.editableEducationList.push({
      degree: '',
      institution: '',
      year: '',
      description: ''
    });
  }

  removeEducation(index: number): void {
    this.editableEducationList.splice(index, 1);
  }

  save(): void {
    // Validate that all required fields are filled
    const isValid = this.editableEducationList.every(edu => 
      edu.degree.trim() !== '' && 
      edu.institution.trim() !== '' && 
      edu.year.trim() !== ''
    );

    if (!isValid) {
      alert('Please fill in all required fields (Degree, Institution, and Year)');
      return;
    }

    this.saveEducation.emit(this.editableEducationList);
  }

  cancel(): void {
    this.closePopup.emit();
  }
}
