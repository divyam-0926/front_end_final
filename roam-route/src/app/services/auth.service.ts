import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://2bd227980592.ngrok-free.app/auth';

  constructor(private http: HttpClient) {}

  // 🔐 Login method
  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // 📝 Signup method (same endpoint used for both login & signup)
  signup(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }
}
