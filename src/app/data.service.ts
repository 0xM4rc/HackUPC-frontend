import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Producto {
  id: number;
  nombre: string;
  precio_unitario: number;
  en_descuento: boolean;
  precio_pack: number;
  es_pack: boolean;
  categoria: string;
  embedding: number[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonDataUrl = 'food.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonDataUrl);
  }
}