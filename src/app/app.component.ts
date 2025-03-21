import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';




@Component({
  selector: 'app-root',
  standalone: true, // ✅ Standalone component
  imports: [CommonModule, MainComponent ,RouterModule], // ✅ Import MainComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  showContent = false; // Default is false, so only the landing page shows initially

  enterApp() {
    this.showContent = true; // Clicking the button enables the main content
  }
}