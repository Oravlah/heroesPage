import { Component, OnInit} from '@angular/core';
import { HeroeService } from '../../shared/services/heroe.service';
import { Heroe } from '../../shared/models/Heroe.model';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deletehero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deletehero.component.html',
  styleUrl: './deletehero.component.css'
})
export default class DeleteheroComponent implements OnInit {
  listHeroe: Heroe[] = [];


  constructor(private heroeService: HeroeService) {
    this.loadData();
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


  deleteHeroe(heroId: string){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroeService.deleteHeroes(heroId).subscribe({
          next: () => {
            this.loadData();
            Swal.fire(
              '¡Borrado!',
              'Tu héroe ha sido borrado.',
              'success'
            )
          },
          error: (error) => {
            Swal.fire(
              'Error',
              'No se pudo borrar el héroe.',
              'error'
            )
          }
        });
      }
    })
  }
}
