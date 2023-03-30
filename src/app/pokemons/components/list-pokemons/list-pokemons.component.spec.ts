import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonsComponent } from './list-pokemons.component';
import {ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPokemonPipe } from '@pokemons/pipes/search-pokemon.pipe';
import { SharedModule } from '@shared/shared.module';
import { NgOptimizedImage } from '@angular/common';

// describe('ListPokemonsComponent', () => {
//   let inputSearch: any;

//   const getByTestId = (id: any, compiled: any) => {
//     return compiled.querySelector(`[data-test-id="${id}"]`);
//   };

//   let pokemonServiceStub: Partial<PokemonService>;

//   beforeEach(async () => {
//     pokemonServiceStub = {};
//     await TestBed.configureTestingModule({
//       declarations: [ ListPokemonsComponent, SearchPokemonPipe  ],
//       imports: [
//         FormsModule,
//         ReactiveFormsModule,
//         HttpClientModule,
//         SharedModule,
//         NgOptimizedImage
//       ],
//       providers: [
//         { provide: PokemonService, useValue: pokemonServiceStub}
//       ],
//       schemas : [CUSTOM_ELEMENTS_SCHEMA]
//     })
//     .overrideComponent(ListPokemonsComponent, {
//       set: {changeDetection: ChangeDetectionStrategy.Default}
//     })
//     .compileComponents();
//   });


//   const factory = () => {
//     const fixture: ComponentFixture<ListPokemonsComponent> = TestBed.createComponent(ListPokemonsComponent);
//     const component: ListPokemonsComponent = fixture.componentInstance;
//     const compiled = fixture.debugElement.nativeElement;
//     // const pokemonService = TestBed.inject(PokemonService);

//     inputSearch = getByTestId('inputSearch', compiled);
//     fixture.detectChanges();
//     return {
//       fixture, component, compiled
//     };
//   };

//   // it('Should render the initial UI as expected', () => {
//   //   const {component, compiled} = factory();
//   //   expect(component).toBeTruthy();
//   //   expect(inputSearch.value.trim()).toBeFalsy();
//   //     const tBody = getByTestId('records-body', compiled);
//   //     expect(tBody.children.length).toEqual(4);
//   //     Array.from(tBody.children).forEach((node: HTMLElement, i) => {
//   //       const tds = Array.from(node.querySelectorAll('td'));
//   //       if (i === 0) {
//   //         expect(tds[0].innerHTML).toEqual('Dittoo');
//   //       } else if (i === 2) {
//   //         expect(tds[0].innerHTML).toEqual('Eevee');
//   //       } else if(i === 3) {
//   //         expect(tds[0].innerHTML).toEqual('Alakazam');
//   //       }
//   //     });

//   // });
// });
