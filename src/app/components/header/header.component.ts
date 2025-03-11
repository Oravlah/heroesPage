  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { CommonModule,  } from '@angular/common';



  /*IMPORTACIONES DE SERVICIOS*/
  import { AuthService } from '../../auth/services/auth.service';



  /*IMPORTACIONES DE ANGULAR MATERIAL*/
  import {MatSidenavModule} from '@angular/material/sidenav';
  import {MatButtonModule} from '@angular/material/button';
  import {MatToolbarModule} from '@angular/material/toolbar';

  @Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatSidenavModule, MatButtonModule, MatToolbarModule, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
  })
  export default class HeaderComponent {
    showFiller = false;
    isDropdownOpen = false;
    isDropdownOpenSideBar = false;


    constructor(
      private router: Router,
      private authService: AuthService
    ) {}



    logout(): void {
      this.authService.logout();
      this.router.navigate(['/login']);
      localStorage.removeItem('token');
    }


    abrirCerrarDropdown(){
      this.isDropdownOpen = !this.isDropdownOpen;
    }

    abrirCerrarDropdownSideBar(){
      this.isDropdownOpenSideBar = !this.isDropdownOpenSideBar;
    }

    cerrarSideBar() {
      this.isDropdownOpenSideBar = false;
    }


    irACrearHeroe(){
      this.router.navigate(['/createhero']);
      console.log('irACrearHeroe');
    }

    irAEditarHeroe(){
      this.router.navigate(['/edithero']);
      console.log('irAEditarHeroe');
    }

    irABorrarHeroe(){
      this.router.navigate(['/deletehero']);
    }

    irAListarHeroes(){
      this.router.navigate(['/listheroes']);
    }

    irAContact(){
      this.router.navigate(['/contact']);
    }

    irAAboutProject(){
      this.router.navigate(['/aboutproject']);
    }

    irAInicio(){
      this.router.navigate(['/inicio']);
    }
  }
