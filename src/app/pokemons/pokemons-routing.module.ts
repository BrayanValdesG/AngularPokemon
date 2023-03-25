import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Containers
import { BasePokemonComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: BasePokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
