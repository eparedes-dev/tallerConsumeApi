import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/';
  constructor(private http:HttpClient) { }

  getPokemons(): Observable<any>{
    return this.http.get<any>(`${this.url}pokemon`);
  }
}
