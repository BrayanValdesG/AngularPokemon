import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/*';
import { ResponseGetPokemon } from '@pokemons/models/pokemon.model';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class PokemonService {

  private apiPokemon = environment.urlBase;

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<ResponseGetPokemon[]> {
    const params = new HttpHeaders();
    const body = {
      idAuthor: 1
    }
    params.append('idAuthor', '1');
    return this.http.get<ResponseGetPokemon[]>(this.apiPokemon + '/?idAuthor=1')
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError));;
  }

  // Retorna el json de la petición
  public extractData(res: any) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error("Bad response status: " + res.status);
    }
    return res;
  }

  // Manejador de errores
  public handleError(error: any) {
    const errMsg = error.message || "Server error";
    console.error("Error al comunicarse al servicio:" + errMsg); // log to console instead
    return throwError(errMsg);
  }
}
