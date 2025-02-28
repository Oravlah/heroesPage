import { Component } from '@angular/core';
import HeaderComponent from '../../components/header/header.component';
import BodyComponent from '../../components/body/body.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
