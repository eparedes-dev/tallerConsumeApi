import { Component,OnInit } from '@angular/core';
import { PokemonService } from '../../Services/pokemon.service';

@Component({
  selector: 'app-poke-api',
  templateUrl: './poke-api.component.html',
  styleUrl: './poke-api.component.css'
})
export class PokeApiComponent implements OnInit{
  pokemons: any[] = []; 
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data.results;
    });
  }
}
