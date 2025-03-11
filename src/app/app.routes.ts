import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./layout/layout/layout.component'),
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./pages/inicio/inicio.component'),
      },
      {
        path: 'createhero',
        loadComponent: () => import('./pages/createhero/createhero.component'),
      },
      {
        path: 'edithero',
        loadComponent: () => import('./pages/edithero/edithero.component'),
      },
      {
        path: 'deletehero',
        loadComponent: () => import('./pages/deletehero/deletehero.component'),
      },
      {
        path: 'aboutproject',
        loadComponent: () => import('./pages/aboutproject/aboutproject.component'),
      },
      {
        path: 'listheroes',
        loadComponent: () => import('./pages/listheroes/listheroes.component'),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component'),
      },
    ]
  },
  {
    path: 'body',
    loadComponent: () => import('./components/body/body.component')
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
