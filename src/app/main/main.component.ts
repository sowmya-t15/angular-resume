import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPopupComponent } from '../admin/login-popup/login-popup.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, LoginPopupComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  showLoginPopup = false;

  constructor(private router: Router, public authService: AuthService) {}

  navigateTo(section: string) {
    this.router.navigate([section]);
  }

  openLoginPopup(): void {
    this.showLoginPopup = true;
  }

  handleLoginClose(success: boolean): void {
    this.showLoginPopup = false;
  }

  logout(): void {
    this.authService.logout();
  }
}
