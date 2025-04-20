import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
// import * as jwt from 'jsonwebtoken';
import {jwtDecode} from 'jwt-decode';
import { Book } from '../pages/books.data'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    this.checkToken();
  }


  login(email: string, password: string): Observable<boolean> {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const user = storedUsers.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      const authToken = this.generateJWT(email); // or use user.email
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('currentUser', JSON.stringify(user)); // optional: store user info
      this.loggedIn.next(true);
      return of(true);
    }

    return of(false);
  }



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
        localStorage.removeItem('authToken');
      }
    }
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);
  }

  private generateJWT(email: string): string {
    const payload = {
      email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // expires in 1 hour
    };
    const base64Payload = btoa(JSON.stringify(payload));
    const fakeToken = `header.${base64Payload}.signature`; // simulate a JWT
    return fakeToken;
  }

  private verifyJWT(token: string): any {
    try {
      const decoded: any = jwtDecode(token);
      const now = Date.now() / 1000;
      if (decoded.exp && decoded.exp < now) {
        throw new Error('Token expired');
      }
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  addToOrders(book: Book): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser && currentUser.email) {
      const userOrders = JSON.parse(localStorage.getItem(`${currentUser.email}-orders`) || '[]');
      userOrders.push(book);
      localStorage.setItem(`${currentUser.email}-orders`, JSON.stringify(userOrders));
    } else {
      console.error('No user is logged in');
    }
  }

}
