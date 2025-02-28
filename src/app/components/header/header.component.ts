import { Component } from '@angular/core';
import { Router } from '@angular/router';



/*IMPORTACIONES DE SERVICIOS*/
import { AuthService } from '../../auth/services/auth.service';



/*IMPORTACIONES DE ANGULAR MATERIAL*/
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export default class HeaderComponent {
  showFiller = false;


  constructor(
    private router: Router,
    private authService: AuthService
  ) {}



  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  irACrearHeroe(){
    this.router.navigate(['/createhero']);
  }

  irAEditarHeroe(){
    this.router.navigate(['/edithero']);
  }

  irABorrarHeroe(){
    this.router.navigate(['/deletehero']);
  }
}
