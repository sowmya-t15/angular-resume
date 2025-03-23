import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent {
  @Input() currentDescription: string = '';
  @Output() saveDescription = new EventEmitter<string>();
  @Output() closePopup = new EventEmitter<void>();
  
  editedDescription: string = '';
  
  ngOnInit() {
    this.editedDescription = this.currentDescription;
  }
  
  save(): void {
    this.saveDescription.emit(this.editedDescription);
  }
  
  cancel(): void {
    this.closePopup.emit();
  }
}
