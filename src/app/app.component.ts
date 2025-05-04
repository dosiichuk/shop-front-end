import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar/navbar.component';
import { ContainerComponent } from './components/shared/container/container/container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavbarComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app-2';
}
