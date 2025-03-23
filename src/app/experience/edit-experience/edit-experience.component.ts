import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Experience {
  company: string;
  role: string;
  duration: string;
}

@Component({
  selector: 'app-edit-experience',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent {
  @Input() experiences: Experience[] = [];
  @Output() saveExperiences = new EventEmitter<Experience[]>();
  @Output() closePopup = new EventEmitter<void>();
  
  editedExperiences: Experience[] = [];
  
  ngOnInit() {
    // Create a deep copy of the experiences array
    this.editedExperiences = JSON.parse(JSON.stringify(this.experiences));
  }
  
  addExperience(): void {
    this.editedExperiences.push({
      company: '',
      role: '',
      duration: ''
    });
  }
  
  removeExperience(index: number): void {
    this.editedExperiences.splice(index, 1);
  }
  
  save(): void {
    this.saveExperiences.emit(this.editedExperiences);
  }
  
  cancel(): void {
    this.closePopup.emit();
  }
}
