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


@NgModule({
  declarations: [
    BasePokemonComponent,
    ListPokemonsComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonsModule { }
