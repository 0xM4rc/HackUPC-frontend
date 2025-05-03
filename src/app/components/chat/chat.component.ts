import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Side = 'left' | 'right';

interface ChatMessage {
  text: string;
  side: Side;
}

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  /** referencia al contenedor para hacer scroll al final */
  @ViewChild('msgList') msgList?: ElementRef<HTMLDivElement>;

  messages: ChatMessage[] = [
    { text: 'Hello, How are you?', side: 'left' },
    { text: "I'm good, thanks for asking! How about you?", side: 'right' }
  ];

  input = '';

  send() {
    const txt = this.input.trim();
    if (!txt) { return; }

    this.messages.push({ text: txt, side: 'right' });
    this.input = '';

    /* espera al siguiente ciclo de cambio y baja el scroll */
    queueMicrotask(() => {
      const el = this.msgList?.nativeElement;
      if (el) { el.scrollTop = el.scrollHeight; }
    });
  }
}
