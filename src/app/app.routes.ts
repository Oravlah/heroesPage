import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'body',
    loadComponent: () => import('./components/body/body.component'),
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./pages/inicio/inicio.component')
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/pages/login/login.component')
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/pages/register/register.component')
  },
  {
    path: 'header',
    loadComponent: () => import('./components/header/header.component')
  },



  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
