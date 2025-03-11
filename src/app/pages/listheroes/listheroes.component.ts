import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeService } from '../../shared/services/heroe.service';
import { Heroe } from '../../shared/models/Heroe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listheroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listheroes.component.html',
  styleUrl: './listheroes.component.css'
})
export default class ListheroesComponent implements OnInit{
  listHeroes: Heroe[] = [];


  constructor(
    private heroeService: HeroeService,
    private router: Router
  ){}


  ngOnInit(){
    this.loadData();
  }


  loadData(){
    this.heroeService.getHeroes().subscribe(data=>{
      this.listHeroes = data;
      console.log("HEROES:", data);
    })
  }

}
