// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent }     from './pages/main/main.component';
import { authGuard } from './guard/auth.guard';


export const routes: Routes = [
  { path: '',        pathMatch: 'full', redirectTo: 'main' },
  { path: 'main',    component: MainComponent,  canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '**',      redirectTo: '' }
];
