import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']   // opcional
})
export class RegisterComponent {

  /** constructor & formulario ---------------------------------------- */
  private fb = inject(FormBuilder);          // API inject → disponible en la línea siguiente

  form = this.fb.group({
    nombre:     ['', Validators.required],
    apellidos:  ['', Validators.required],
    edad:       [null, [Validators.required, Validators.min(0)]],
    diabetico:  [false],
    tipoComida: [[] as string[]]
  });

  /** helpers ---------------------------------------------------------- */
  get chipsCtrl() { return this.form.get('tipoComida')!; }

  addTag(input: HTMLInputElement) {
    const value = input.value.trim();
    if (value && !this.chipsCtrl.value!.includes(value)) {
      this.chipsCtrl.setValue([...this.chipsCtrl.value!, value]);
    }
    input.value = '';
  }

  removeTag(i: number) {
    const list = [...this.chipsCtrl.value!];
    list.splice(i, 1);
    this.chipsCtrl.setValue(list);
  }

  guardar() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const user: User = this.form.value as User;
    console.log('Usuario registrado', user);
  }
}
