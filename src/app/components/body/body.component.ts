import { Component } from '@angular/core';
import HeaderComponent from '../header/header.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [  HeaderComponent ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export default class BodyComponent {

}
