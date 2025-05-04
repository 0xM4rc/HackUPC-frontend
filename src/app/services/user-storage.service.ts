import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

const KEY = 'mercadona-user';

@Injectable({ providedIn: 'root' })
export class UserStorageService {
  save(user: User): void   { localStorage.setItem(KEY, JSON.stringify(user)); }
  load(): User | null      { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : null; }
  clear(): void            { localStorage.removeItem(KEY); }
}

