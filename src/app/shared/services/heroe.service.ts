import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError} from 'rxjs';

import { Heroe } from '../models/Heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private REST_API_HEROES = environment.REST_API_HEROES;
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  private heroeSubject: BehaviorSubject<Heroe[]> = new BehaviorSubject<Heroe[]>([]);
  public heroes$: Observable<Heroe[]> = this.heroeSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getHeroes();
    setInterval(() => {
      this.getHeroes();
    }, 5000);
  }

  getHeroes(): Observable<Heroe[]> {
    const noCacheUrl =  `${this.REST_API_HEROES}?=t${Date.now()}`;
    return this.http.get<Heroe[]>(noCacheUrl, {headers: this.httpHeaders})
  }

  getHeroeById(id: string): Observable<Heroe> {
    const noCacheUrl =  `${this.REST_API_HEROES}/${id}?=t${Date.now()}`;
    return this.http.get<Heroe>(noCacheUrl, {headers: this.httpHeaders})
  }

  updateHeroes(heroe: Heroe): Observable<Heroe>{
    const noCacheUrl =  `${this.REST_API_HEROES}/${heroe._id}?=t${Date.now()}`;
    return this.http.put<Heroe>(noCacheUrl, heroe, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  deleteHeroes(id: string): Observable<Heroe> {
    const noCacheUrl =  `${this.REST_API_HEROES}/${id}?=t${Date.now()}`;
    return this.http.delete<Heroe>(noCacheUrl, {headers: this.httpHeaders})
  }

  crearHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(this.REST_API_HEROES, heroe, {headers: this.httpHeaders})
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}. Message: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

}
