import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient, private cookies: CookieService) { }

  loginUsuario(login) {
    return this.http.post(`${this.baseUrl}/login.php`, JSON.stringify(login));
  }

}
