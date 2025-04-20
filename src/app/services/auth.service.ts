import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as jwt from 'jsonwebtoken'; // Import jsonwebtoken for JWT handling

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    // Check if a valid token exists when the app loads
    this.checkToken();
  }

  // Simulate the login process and JWT token generation
  login(email: string, password: string): Observable<boolean> {
    // Simulating the login process
    if (email === 'user@example.com' && password === 'password') {
      const authToken = this.generateJWT(email); // Generate JWT
      localStorage.setItem('authToken', authToken); // Store token in localStorage
      this.loggedIn.next(true); // Set loggedIn state
      return of(true);
    }
    return of(false);
  }

  // Check if the user is logged in by validating JWT
  checkToken(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decodedToken = this.verifyJWT(token);
        if (decodedToken) {
          this.loggedIn.next(true);
        }
      } catch (error) {
        this.loggedIn.next(false);
        localStorage.removeItem('authToken'); // Invalidate token if invalid
      }
    }
  }

  // Get login status
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // Logout function
  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);
  }

  // Simulate JWT token generation
  private generateJWT(email: string): string {
    const payload = { email }; // Payload could include more data like roles, etc.
    const secretKey = 'secretkey'; // In a real application, this would be kept securely
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Simulate a JWT token
    return token;
  }

  // Simulate JWT verification (decoding and validating)
  private verifyJWT(token: string): any {
    const secretKey = 'secretkey'; // The secret key should be the same as used in token generation
    try {
      return jwt.verify(token, secretKey); // Verify token
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
