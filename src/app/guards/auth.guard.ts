import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService} from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return new Observable((observer) => {
      this.authService.isLoggedIn.subscribe((isLoggedIn) => {
        if (!isLoggedIn) {
          // Redirect to login if the user is not authenticated
          this.router.navigate(['/login']);
          observer.next(false);
        } else {
          observer.next(true);
        }
      });
    });
  }
}
