export interface User {
  nombre:     string;
  apellidos:  string;
  edad:        number | null;
  diabetico:  boolean;
  tipoComida: string[];
}