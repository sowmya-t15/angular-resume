import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML & CSS', level: 'Expert' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' }
  ];
}

