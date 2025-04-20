import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-shell.component.html',
  styleUrls: ['./dashboard-shell.component.css'],
})
export class DashboardShellComponent {
  isSidebarOpen = false;
  firstName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser?.name) {
      this.firstName = currentUser.name.split(' ')[0] || 'User'; // Grab the first name
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // optional redirect
  }
}
