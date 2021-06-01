import { Categoria } from './categoria';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.baseUrl}/getCategorias.php`);
  }

  deleteCategoria(categ: Categoria) {
    return this.http.delete(`${this.baseUrl}/deleteAdmin.php?idMascota=${categ.id}`);
  }

  addCateg(categ: Categoria) {
    return this.http.post(`${this.baseUrl}/addAdmin.php`, categ);
  }

  getCategoria(id: string | number) {
    return this.http.get(`${this.baseUrl}/getAdmin.php?idMascota=${id}`);
  }


  updateCategoria(categ: Categoria) {
    return this.http.put(`${this.baseUrl}/updateAdmin.php`, categ);
  }
}
