import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    { company: 'Company A', role: 'Software Engineer', duration: '2022 - Present' },
    { company: 'Company B', role: 'Frontend Developer', duration: '2020 - 2022' },
    { company: 'Company C', role: 'Intern', duration: '2019 - 2020' }
  ];
}

