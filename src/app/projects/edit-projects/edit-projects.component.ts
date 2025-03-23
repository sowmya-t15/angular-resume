import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Project {
  title: string;
  description: string;
}

@Component({
  selector: 'app-edit-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent {
  @Input() projects: Project[] = [];
  @Output() saveProjects = new EventEmitter<Project[]>();
  @Output() closePopup = new EventEmitter<void>();

  editableProjects: Project[] = [];

  ngOnInit(): void {
    // Create a deep copy of the projects list to avoid modifying the original
    this.editableProjects = JSON.parse(JSON.stringify(this.projects));
  }

  addProject(): void {
    this.editableProjects.push({
      title: '',
      description: ''
    });
  }

  removeProject(index: number): void {
    this.editableProjects.splice(index, 1);
  }

  save(): void {
    // Validate that all required fields are filled
    const isValid = this.editableProjects.every(project => 
      project.title.trim() !== '' && 
      project.description.trim() !== ''
    );

    if (!isValid) {
      alert('Please fill in all required fields (Title and Description)');
      return;
    }

    this.saveProjects.emit(this.editableProjects);
  }

  cancel(): void {
    this.closePopup.emit();
  }
}
