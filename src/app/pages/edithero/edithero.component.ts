import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgFor} from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeService } from '../../shared/services/heroe.service';
import { Heroe } from '../../shared/models/Heroe.model';
import Swal from 'sweetalert2';
import {  ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edithero',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edithero.component.html',
  styleUrl: './edithero.component.css'
})
export default class EditheroComponent implements OnInit {
  listHeroe: Heroe[] = [];
  heroesForm: FormGroup;
  showModal = false;
  selectedHeroeId: string | null = null;

  constructor(
    private router: Router,
    private heroeService: HeroeService,
    private fb: FormBuilder
  ) {
    this.heroesForm = this.fb.group({
      nombre: ['', Validators.required],
      alias: ['', Validators.required],
      edad: ['', Validators.required],
      poder: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.heroeService.getHeroes().subscribe(data=>{
      this.listHeroe = data;
      console.log("HEROES:", data);
    })
  }


  openEditModal(heroId: string){
    this.heroeService.getHeroeById(heroId).subscribe({
      next: (heroe) => {
        this.selectedHeroeId = heroId;
        this.heroesForm.setValue({
          nombre: heroe.nombre || '',
          alias: heroe.alias || '',
          edad: heroe.edad  || '',
          poder: heroe.poder || '',
          nacionalidad: heroe.nacionalidad || '',
          descripcion: heroe.descripcion || '',
        });
        this.showModal = true;
      },
      error: () => {
        Swal.fire('Error', 'No se pudo cargar el héroe', 'error');
      },
    });
  }

  closeModal(){
    this.showModal = false;
    this.heroesForm.reset();
    this.selectedHeroeId = null;
  }



  onSubmit() {
    if (this.heroesForm.invalid) {
      Swal.fire('Advertencia', 'Por favor, complete todos los campos', 'warning');
      return;
    }

    if (this.selectedHeroeId) {
      const updateHeroe: Heroe = {
        ...this.heroesForm.value,
        _id: this.selectedHeroeId
      };

      this.heroeService.updateHeroes(updateHeroe).subscribe({
        next: () => {
          Swal.fire('Éxito', 'Héroe actualizado correctamente', 'success');
          this.loadData();
          this.closeModal();
        },
        error: () => {
          Swal.fire('Error', 'No se pudo actualizar el héroe', 'error');
        },
      });
    }
  }

}
