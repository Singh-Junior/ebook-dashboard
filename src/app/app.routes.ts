import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { DashboardShellComponent } from './layout/dashboard-shell.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LibraryComponent } from './pages/library/library.component';
import { OrdersComponent } from './pages/orders/orders.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboardpage',
    component: DashboardShellComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'library', component: LibraryComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
