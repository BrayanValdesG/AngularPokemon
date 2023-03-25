import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { SharedModule } from '@shared/shared.module';

// Services
import { PokemonService } from './services';
// Pipes
import { SearchPokemonPipe } from './pipes/search-pokemon.pipe';
// Containers
import { BasePokemonComponent } from './containers';
// Components
import { ListPokemonsComponent, FormPokemonComponent } from './components';


@NgModule({
  declarations: [
    BasePokemonComponent,
    ListPokemonsComponent,
    SearchPokemonPipe,
    FormPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonsModule { }
