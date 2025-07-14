import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  submitLogin(form: NgForm) {
    if (form.invalid) {
      alert('Please fill in all required fields.');
      return;
    }

    this.http.post<any>('https://2bd227980592.ngrok-free.app/auth/login', this.formData)
      .subscribe({
        next: (res) => {
          console.log('✅ Login successful:', res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.userId);
          localStorage.setItem('username', res.username);
          alert(res.message || 'Login successful!');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('❌ Login failed:', err);
          alert('Login failed. Check your credentials and try again.');
        }
      });
  }
}
