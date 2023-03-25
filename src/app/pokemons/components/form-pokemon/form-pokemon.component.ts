import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '@pokemons/services';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService
  ) {

  }

  ngOnInit(): void {
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

  savePokemon($event: any) {
    if (this.form.valid) {
      this.pokemonService.savePokemon(this.form.getRawValue()).subscribe();
    }
  }

}
