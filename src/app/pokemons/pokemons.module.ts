import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { SharedModule } from '@shared/shared.module';

// Services
import { PokemonService } from './services';
// Containers
import { BasePokemonComponent } from './containers';

// Components
import { ListPokemonsComponent } from './components';
import { SearchPokemonPipe } from './pipes/search-pokemon.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasePokemonComponent,
    ListPokemonsComponent,
    SearchPokemonPipe
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonsModule { }
