// src/app/components/register/register.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserStorageService } from '../../services/user-storage.service';
import { AuthService }         from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  /* inyección */
  private fb     = inject(FormBuilder);
  private store  = inject(UserStorageService);
  private auth   = inject(AuthService);
  private router = inject(Router);

  /* formulario */
  form = this.fb.group({
    nombre:          ['', Validators.required],
    apellidos:       ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    diabetico:       [false],
    tipoComida:      [[] as string[]],
  });

  /* precarga si ya existe perfil */
  ngOnInit(): void {
    const saved = this.store.load();
    if (saved) this.form.patchValue(saved);
  }

  /* chips helpers */
  get chipsCtrl() { return this.form.get('tipoComida')!; }

  addTag(input: HTMLInputElement) {
    const v = input.value.trim();
    if (v && !this.chipsCtrl.value!.includes(v)) {
      this.chipsCtrl.setValue([...this.chipsCtrl.value!, v]);
    }
    input.value = '';
  }
  removeTag(i: number) {
    const list = [...this.chipsCtrl.value!];
    list.splice(i, 1);
    this.chipsCtrl.setValue(list);
  }

  /* guardar */
  guardar() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    const user = this.form.value as User;
    this.auth.login(user);                 // guarda en localStorage
    console.log('✅ Usuario registrado', user);

    this.router.navigateByUrl('/main');    // 🔗 redirige a la ruta protegida
  }
}
