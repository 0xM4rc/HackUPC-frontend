import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from "../../components/chat/chat.component";

type Side = 'left' | 'right';

interface ChatMessage {
  text: string;
  side: Side;
}

@Component({
  providers: [],
  selector: 'app-main',
  imports: [CommonModule, FormsModule, ChatComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {

}
