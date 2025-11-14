import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})

export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';

  //submitContact() is just for debugging,it prints the form values to the console so I can see what the user typed.
  submitContact() {
    console.log('Contact form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    alert('Thank you for contacting us!');
    // Clear form
    this.name = '';
    this.email = '';
    this.message = '';
  }
  clearForm() {
  this.name = '';
  this.email = '';
  this.message = '';
}



}

