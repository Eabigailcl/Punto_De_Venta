import { Admin } from './admin';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getAdministradores() {
    return this.http.get(`${this.baseUrl}/getAdmins.php`);
  }

  deleteAdmin(admin: Admin) {
    return this.http.delete(`${this.baseUrl}/deleteAdmin.php?idMascota=${admin.id}`);
  }

  addAdmin(admin: Admin) {
    return this.http.post(`${this.baseUrl}/addAdmin.php`, admin);
  }

  getAdmin(id: string | number) {
    return this.http.get(`${this.baseUrl}/getAdmin.php?idMascota=${id}`);
  }


  updateAdmin(admin: Admin) {
    return this.http.put(`${this.baseUrl}/updateAdmin.php`, admin);
  }
}
