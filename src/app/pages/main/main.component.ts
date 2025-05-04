import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from '../../components/chat/chat.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, ChatComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  ids: number[] = [];
  idsAleatorios: number[] = [];

  imageFolder = 'img/';
  imageExtension = '.jpg';

  // Solo guardamos qué IDs están "liked"
  private likedIds = new Set<number>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cargarYSeleccionarIds();
  }

  private cargarYSeleccionarIds(): void {
    this.dataService.obtenerDatos().subscribe(data => {
      this.ids = data.map(item => item.id);
      this.seleccionarIdsAleatorios(this.ids, 5);
    });
  }

  private seleccionarIdsAleatorios(array: number[], cantidad: number): void {
    const copia = [...array];
    const elegidos: number[] = [];

    for (let i = 0; i < cantidad && copia.length; i++) {
      const indice = Math.floor(Math.random() * copia.length);
      elegidos.push(copia.splice(indice, 1)[0]);
    }
    this.idsAleatorios = elegidos;
  }

  getImageUrl(id: number): string {
    return `${this.imageFolder}${id}${this.imageExtension}`;
  }

  toggleLike(id: number): void {
    if (this.likedIds.has(id)) {
      this.likedIds.delete(id);
    } else {
      this.likedIds.add(id);
    }
  }

  isLiked(id: number): boolean {
    return this.likedIds.has(id);
  }
}
