import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  private http = inject(HttpClient);

  // Idealmente pon la clave en una variable de entorno o en el backend:
  private readonly apiKey = environment.openaiKey;     // ⚠️  ¡nunca expongas la key en prod!
  private readonly apiUrl = 'https://api.openai.com/v1/chat/completions';
  private readonly model  = 'gpt-3.5-turbo';           // o gpt-4o, etc.

  async chat(messages: { role: 'user' | 'assistant'; content: string }[]) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: this.model,
      messages,
      temperature: 0.7,
    };

    return firstValueFrom(
      this.http.post<any>(this.apiUrl, body, { headers })
    );
  }
}
