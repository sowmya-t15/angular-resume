import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactList = [
    {
      name: "sowmya",
      email: "tsowmya111@gmail.com",
      phone: "+123456789",
      message: "Feel free to reach out for collaboration or queries."
    }
  ];
}
