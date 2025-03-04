import { Component } from '@angular/core';
import HeaderComponent from '../../components/header/header.component';
import BodyComponent from '../../components/body/body.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';




@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, RouterModule, MatSidenavModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
