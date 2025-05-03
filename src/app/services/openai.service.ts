// src/app/services/openai.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';

type Role = 'system' | 'user' | 'assistant';
interface Message { role: Role; content: string; }

@Injectable({ providedIn: 'root' })
export class OpenAiService {
  private http = inject(HttpClient);

  private readonly apiKey = environment.openaiKey;          // ⚠️  no exponer en prod
  private readonly apiUrl = 'https://api.openai.com/v1/chat/completions';
  private readonly model  = 'gpt-3.5-turbo';

  /** Historial (incluye prompt de sistema) */
  private conversation: Message[] = [
    {
      role: 'system',
      content:
        'Eres un bot de Mercadona cuyo objetivo es crear una lista de compra ' +
        'a partir de las preferencias dietéticas del usuario. Si el usuario es ' +
        'vegano no le ofrezcas carne. Pregunta por sus preferencias dietéticas ' +
        'si no las ha especificado y sugiere productos concretos de Mercadona ' +
        'que cumplan con esas restricciones.'
    }
  ];

  /** Envía `userText`, guarda el historial y devuelve la respuesta GPT */
  async send(userText: string): Promise<string> {
    this.conversation.push({ role: 'user', content: userText });

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    });

    const body = {
      model: this.model,
      messages: this.conversation,
      max_tokens: 150,
      temperature: 0.7
    };

    const res: any = await firstValueFrom(
      this.http.post(this.apiUrl, body, { headers })
    );

    const assistantText: string = res.choices[0].message.content;
    this.conversation.push({ role: 'assistant', content: assistantText });

    return assistantText;
  }

  /** Devuelve el log sin el mensaje de sistema (útil para depurar) */
  get log(): Message[] {
    return this.conversation.slice(1);
  }
}
