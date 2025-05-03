import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'main', component: MainComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Usar forRoot en el módulo principal
    exports: [RouterModule]
  })

export class AppRoutingModule { }