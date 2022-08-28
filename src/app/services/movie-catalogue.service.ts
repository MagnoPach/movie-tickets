import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { MovieData, TheaterData } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieCatalogueService {

  private endpointMovies: string = 'https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events'
  private endpointTheaters: string = 'https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/{0}/theaters'
  // kkkkk

  constructor(private httpClient: HttpClient) { }

  public getMoviesFromApi(): Observable<MovieData[]> {
				const endpoint: string = this.endpointMovies;
				return this.httpClient.get<MovieData[]>(endpoint).pipe(
          catchError(this.handleError<MovieData[]>('movies', []))
      );
	}

  public catchTheatersShowingTheMovie(promotionId: string): Observable<TheaterData[]> {
				const endpoint: string = `${this.endpointTheaters.replace('{0}', promotionId)}`;
				return this.httpClient.get<TheaterData[]>(endpoint).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError<TheaterData[]>('theaters', []))
      );
	}

	private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}
