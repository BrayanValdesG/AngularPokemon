import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { SharedModule } from '@shared/shared.module';

// Containers
import { BasePokemonComponent } from './containers';


@NgModule({
  declarations: [
    BasePokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule
  ]
})
export class PokemonsModule { }
