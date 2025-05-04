import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {

  username: string = '';
  email: string = '';
  password: string = '';

  onSubmit(form: any) {
    console.log('Form submitted:', {
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
}
