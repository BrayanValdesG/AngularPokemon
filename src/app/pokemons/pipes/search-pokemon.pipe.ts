import { Pipe, PipeTransform } from '@angular/core';
import { ResponseGetPokemon } from '@pokemons/models/pokemon.model';

@Pipe({
  name: 'searchPokemon'
})
export class SearchPokemonPipe implements PipeTransform {

  transform(pokemons: ResponseGetPokemon[], searchText: string): ResponseGetPokemon[] {
    if (searchText === '') return pokemons;
    const findPokemonByName = pokemons.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
    return findPokemonByName;
  }

}
