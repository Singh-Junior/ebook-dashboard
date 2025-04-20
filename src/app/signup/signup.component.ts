import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  passwordsMismatch = false;

  constructor(private fb: FormBuilder,  private alertService: AlertService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

    this.signupForm.valueChanges.subscribe(() => {
      this.checkPasswordsMatch();
    });
  }

  checkPasswordsMatch() {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;
    this.passwordsMismatch = password && confirmPassword && password !== confirmPassword;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.signup();
      console.log(this.signupForm.value);
    }
  }

  signup() {
    const formData = this.signupForm.value;
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if user already exists
    const existingUser = storedUsers.find((user: any) => user.email === formData.email);
    if (existingUser) {
      this.alertService.show('info','User already exists! Please login.');
      return;
    }

    // Add new user and save
    storedUsers.push(formData);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    this.alertService.show('success','Signup successful! Please login.');
  }
}
