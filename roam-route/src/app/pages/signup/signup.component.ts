import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  submitSignup(form: NgForm) {
    if (form.invalid) {
      alert('Please fill all required fields.');
      return;
    }

    this.authService.signup(this.formData).subscribe({
      next: (res: any) => {
        console.log('✅ Signup successful:', res);
        alert(res.message || 'Account created successfully!');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('❌ Signup failed:', err);
        alert('Signup failed. Try a different username.');
      }
    });
  }
}
