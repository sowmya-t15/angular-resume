import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  standalone: true,
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  constructor(private router: Router) {}

  showResume() {
    this.router.navigate(['/resume']);
  }
}
