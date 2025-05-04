import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.css'
})
export class SigninFormComponent {
  email: string = '';
  password: string = '';

  onSubmit(form: any) {
    console.log('Form submitted:', {
      email: this.email,
      password: this.password
    });
  }

}
