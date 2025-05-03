// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  template: '<app-register></app-register>'
})
export class AppComponent {}

