import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule,  } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-edithero',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './edithero.component.html',
  styleUrl: './edithero.component.css'
})
export default class EditheroComponent {


  constructor(
    private router: Router
  ) {}



}
