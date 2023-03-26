import { transition, trigger, style, animate } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseGetPokemon } from '@pokemons/models/pokemon.model';
import { PokemonService } from '@pokemons/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss'],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "translateY(-3%)", opacity: 0 }),
        animate("150ms", style({ transform: "translateY(0)", opacity: 1 })),
      ]),
      transition(":leave", [
        style({ transform: "translateY(0)", opacity: 1 }),
        animate("150ms", style({ transform: "translateY(-3%)", opacity: 0 })),
      ]),
    ]),
  ],
})
export class ListPokemonsComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();
  pokemons: ResponseGetPokemon[] = [];
  filterPokemon = '';
  form!: FormGroup;
  isNew = false;
  isEdit = false;
  pokemonEdit: ResponseGetPokemon = {} as ResponseGetPokemon;

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
      hp: [100],
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

  savePokemon() {
    if (this.form.valid) {
      this.pokemonService.savePokemon(this.form.getRawValue())
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.pokemons.push(res);
        this.form.reset();
        this.cancel();
      });
    }
  }

  updatePokemon() {
    if (this.form.valid) {
        this.pokemonService.updatePokemon(this.form.getRawValue(), this.pokemonEdit.id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res) => {
          const findPokemonEditIndex = this.pokemons.findIndex((item) => item.id === this.pokemonEdit.id);
          this.pokemons[findPokemonEditIndex] = this.form.getRawValue();
          this.form.reset();
          this.cancel();
        });
    }
  }

  editPokemon(pokemonSelected: ResponseGetPokemon) {
    this.pokemonEdit = pokemonSelected;
    this.pokemonService.getPokemonById(pokemonSelected.id)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res) => {
      this.form.reset();
      this.form.patchValue(res);
      this.isEdit = true;
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

  clickNew() {
    this.isNew = true;
  }

  cancel() {
    this.isNew = false;
    this.isEdit = false;
    this.pokemonEdit = {} as ResponseGetPokemon;
  }

}
