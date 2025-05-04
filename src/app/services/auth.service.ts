// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from './user-storage.service';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: UserStorageService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.store.load() !== null;
  }

  currentUser(): User | null {
    return this.store.load();
  }

  login(user: User): void {
    this.store.save(user);
  }

  logout(): void {
    this.store.clear();
    this.router.navigateByUrl('/register');
  }
}
