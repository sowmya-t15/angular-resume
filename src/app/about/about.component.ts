import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutTitle: string = "About Me";
  aboutDescription: string = "I am an MCA student passionate about software development, constantly enhancing my knowledge in coding, logical thinking, and problem-solving. I actively engage in hands-on projects, exploring various technologies to deepen my understanding of programming concepts. My approach to work is a blend of dedication and smart thinking, allowing me to efficiently tackle challenges and complete tasks within deadlines.";
  
}
