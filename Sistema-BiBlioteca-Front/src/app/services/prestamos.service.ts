import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private apiUrl = 'http://localhost:8080/api_prestamos';

  constructor(private http: HttpClient) { }

  getHistorialPrestamos() {
    return this.http.get(`${this.apiUrl}/prestamos`);
  }


  getHistorialPrestamosId(idUsuario: number) {
    return this.http.get(`${this.apiUrl}/prestamos/${idUsuario}`);
  }


  devolverLibro(idPrestamo: number) {
    return this.http.put(`${this.apiUrl}/prestamos/${idPrestamo}`, {});
  }
}