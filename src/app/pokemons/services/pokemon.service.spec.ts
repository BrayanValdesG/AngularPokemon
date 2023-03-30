import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ResponseGetPokemon } from '@pokemons/models/pokemon.model';
import { of } from 'rxjs';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let pokemonService: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    pokemonService = new PokemonService(httpClientSpy);
  });

  it('should return expected pokemons (HttpClient called once)', (done: DoneFn) => {
    const expectedPokemons: ResponseGetPokemon[] =
    [
      {
        attack: 64,
        defense: 85,
        hp: 0,
        id: 360,
        idAuthor: 1,
        image: "https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg",
        name: "yyPikachuu",
        type: null
      },
      {
        attack: 70,
        defense: 60,
        hp: 0,
        id: 383,
        idAuthor: 1,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
        name: "Alakazam",
        type: null
      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedPokemons));

    pokemonService.getPokemons().subscribe({
      next: pokemons => {
        expect(pokemons)
          .withContext('expected heroes')
          .toEqual(expectedPokemons);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  // it('should be created', () => {
  //   expect(pokemonService).toBeTruthy();
  // });
});
