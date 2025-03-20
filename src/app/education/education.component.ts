import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList = [
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
}
