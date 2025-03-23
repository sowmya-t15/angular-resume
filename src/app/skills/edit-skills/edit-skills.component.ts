import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Skill {
  name: string;
  level: string;
}

@Component({
  selector: 'app-edit-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent {
  @Input() skills: Skill[] = [];
  @Output() saveSkills = new EventEmitter<Skill[]>();
  @Output() closePopup = new EventEmitter<void>();

  editableSkills: Skill[] = [];
  skillLevels: string[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  ngOnInit(): void {
    // Create a deep copy of the skills list to avoid modifying the original
    this.editableSkills = JSON.parse(JSON.stringify(this.skills));
  }

  addSkill(): void {
    this.editableSkills.push({
      name: '',
      level: 'Intermediate'
    });
  }

  removeSkill(index: number): void {
    this.editableSkills.splice(index, 1);
  }

  save(): void {
    // Validate that all required fields are filled
    const isValid = this.editableSkills.every(skill => 
      skill.name.trim() !== '' && 
      skill.level.trim() !== ''
    );

    if (!isValid) {
      alert('Please fill in all required fields (Name and Level)');
      return;
    }

    this.saveSkills.emit(this.editableSkills);
  }

  cancel(): void {
    this.closePopup.emit();
  }
}
