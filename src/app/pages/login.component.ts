import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  styleUrls: ['./login.component.css'],
  standalone: true,
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private alertService: AlertService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;
    this.login();
    console.log(this.loginForm.value);
  }

  login() {
    const { email, password } = this.loginForm.value;
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const validUser = storedUsers.find((user: any) => user.email === email && user.password === password);

    if (validUser) {
      // Optionally store the current user info
      localStorage.setItem('currentUser', JSON.stringify(validUser));
      this.alertService.show('success',`Welcome back, ${validUser.name || 'user'}!`);
      // Navigate to dashboard here
    } else {
      this.alertService.show('error','Invalid credentials');
    }
  }


}
