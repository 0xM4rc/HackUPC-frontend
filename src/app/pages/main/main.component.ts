// src/app/pages/main/main.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from "../../components/chat/chat.component";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../data.service';

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
export class MainComponent implements OnInit {
  ids: number[] = [];
  idsAleatorios: number[] = [];
  imageFolder = 'img/'; // Ruta a la carpeta de imágenes
  imageExtension = '.jpg'; // O '.png', '.gif', etc. según tus archivos

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.cargarYSeleccionarIds();
  }

  cargarYSeleccionarIds(): void {
    this.dataService.obtenerDatos().subscribe(data => {
      this.ids = data.map(item => item.id);
      this.seleccionarIdsAleatorios(this.ids, 5);
    });
  }

  seleccionarIdsAleatorios(array: number[], cantidad: number): void {
    const arrayCopia = [...array];
    const seleccionados: number[] = [];

    for (let i = 0; i < cantidad; i++) {
      if (arrayCopia.length === 0) {
        break;
      }
      const indiceAleatorio = Math.floor(Math.random() * arrayCopia.length);
      seleccionados.push(arrayCopia.splice(indiceAleatorio, 1)[0]);
    }
    this.idsAleatorios = seleccionados;
  }

  getImageUrl(id: number): string {
    return this.imageFolder + id + this.imageExtension;
  }
}