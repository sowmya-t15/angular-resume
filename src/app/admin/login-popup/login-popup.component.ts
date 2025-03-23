import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent {
  @Output() closePopup = new EventEmitter<boolean>();
  
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.closePopup.emit(true); // Success
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }

  cancel(): void {
    this.closePopup.emit(false);
  }
}
