import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  styleUrls: ['./login.component.css'],
  standalone: true,
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private alertService: AlertService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    // Call the authService login method
    this.authService.login(email, password).subscribe(
      (success) => {
        if (success) {
          // Navigate to dashboard after successful login
          // this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid email or password';
          this.alertService.show('error', this.errorMessage); // Show error alert
        }
      },
      (error) => {
        this.errorMessage = 'Something went wrong!';
        this.alertService.show('error', this.errorMessage); // Show error alert
      }
    );
  }


}
