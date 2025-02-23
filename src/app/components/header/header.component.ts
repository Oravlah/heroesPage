import { Component } from '@angular/core';

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
}
