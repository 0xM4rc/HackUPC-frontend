// src/app/components/chat/chat.component.ts
import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenAiService } from '../../services/openai.service';

type Side = 'left' | 'right';
interface ChatMessage { text: string; side: Side; }

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgClass],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @ViewChild('msgList') msgList?: ElementRef<HTMLDivElement>;

  private ai = inject(OpenAiService);

  messages: ChatMessage[] = [
    {
      text:
        '¡Hola! Soy tu asistente de compras de Mercadona.\n' +
        '¿Cuáles son tus preferencias dietéticas (vegano, sin gluten, etc.)?',
      side: 'left'
    }
  ];

  input = '';
  sending = false;

  async send() {
    const txt = this.input.trim();
    if (!txt || this.sending) return;

    // Muestra mensaje del usuario
    this.messages.push({ text: txt, side: 'right' });
    this.input = '';
    this.scroll();

    this.sending = true;
    try {
      // Obtiene respuesta del servicio (que gestiona el historial)
      const reply = await this.ai.send(txt);
      this.messages.push({ text: reply, side: 'left' });
    } catch (err) {
      console.error('Error contacting OpenAI:', err);
      this.messages.push({
        text: '⚠️ Error al contactar con el asistente.',
        side: 'left'
      });
    } finally {
      this.sending = false;
      this.scroll();
    }
  }

  private scroll() {
    queueMicrotask(() => {
      const el = this.msgList?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }
}
