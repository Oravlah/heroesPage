import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/pages/login/login.component')
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/pages/register/register.component')
  },




  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
