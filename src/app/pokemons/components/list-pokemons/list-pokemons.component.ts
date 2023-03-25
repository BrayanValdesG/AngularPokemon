import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponseGetPokemon } from '@pokemons/models/pokemon.model';
import { PokemonService } from '@pokemons/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();
  pokemons: ResponseGetPokemon[] = [];
  filterPokemon = '';

  constructor(
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit() {
    this.getPokemons();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }

  getPokemons() {
    this.pokemonService.getPokemons()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res) => {
      this.pokemons = res;
    });
  }

  deletePokemon(evt: any, pokemon: ResponseGetPokemon, index: number) {
    this.pokemonService.deletePokemon(pokemon.id)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe();
    this.pokemons.splice(index, 1)
  }

  trackByPokemon(idx: number,pokemon: ResponseGetPokemon) {
    return pokemon.id;
   }

}
