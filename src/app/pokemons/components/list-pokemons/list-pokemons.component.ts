import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form!: FormGroup;

  constructor(
    private pokemonService: PokemonService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.getPokemons();
    this.initForm();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }

  initForm() {
    this.form = this.formBuilder.nonNullable.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      attack: [0, Validators.required],
      defense: [0, Validators.required],
      hp: ['100'],
      type: ['unknown'],
      idAuthor: ['1']
    });
  }

  getPokemons() {
    this.pokemonService.getPokemons()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res) => {
      this.pokemons = res;
    });
  }

  savePokemon($event: any) {
    if (this.form.valid) {
      this.pokemonService.savePokemon(this.form.getRawValue()).subscribe();
    }
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
