import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

/*Importaciones para los formularios*/
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


/*Importaciones de servicios y modelos a utilizar*/
import { HeroeService } from '../../shared/services/heroe.service';
import { Heroe } from '../../shared/models/Heroe.model';


/*IMPORTACIONES DE ANGULAR MATERIAL*/
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-createhero',
  standalone: true,
  imports: [ NgIf, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './createhero.component.html',
  styleUrl: './createhero.component.css'
})
export default class CreateheroComponent {
  crearHeroeForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private heroeService: HeroeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crearHeroeForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      alias: ['', [Validators.required, Validators.minLength(3)]],
      edad: [ '', [Validators.required, Validators.min(0)]],
      poder: ['', [Validators.required, Validators.minLength(3)]],
      nacionalidad: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(3)]],
    });
  }


  onSubmit(): void {
    if (this.crearHeroeForm.invalid) {
      this.mostrarErroresFormulario();
      return;
    }

    const heroe = this.crearHeroeForm.value;

    this.heroeService.crearHeroe(heroe).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Héroe creado con éxito.', 'success');
        this.router.navigate(['/heroes']);
      },
      error: () => {
        Swal.fire('Error', 'Error al crear héroe. Intenta más tarde.', 'error');
      }
    });
  }


  private mostrarErroresFormulario(): void {
    let errores: string[] = [];
    Object.entries(this.crearHeroeForm.controls).forEach(([name, control]) => {
      if (control.invalid) {
        const erroresCampo: string[] = [];
        if (control.hasError('required')) {
          erroresCampo.push('Campo requerido');
        }
        if (control.hasError('minlength')) {
          erroresCampo.push('Mínimo 3 caracteres');
        }
        errores.push(`El campo ${name} ${erroresCampo.join(', ')}`);
      }
    });

    Swal.fire('Advertencia', `Corrige los siguientes errores:<br>${errores.join('<br>')}`, 'warning');
  }



  getErrorMessage(field: string): string {
    const control = this.crearHeroeForm.get(field);
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (control?.hasError('minlength')) {
      return `Mínimo ${control.errors?.['minlength'].requiredLength} caracteres`;
    }
    if (control?.hasError('min')) {
      return `El valor mínimo es ${control.errors?.['min'].min}`;
    }
    return '';
  }



}
