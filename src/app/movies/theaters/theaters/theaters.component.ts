import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCatalogueService } from 'src/app/services/movie-catalogue.service';
import { MovieData, TheaterData } from 'src/app/models/movie.model';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.scss']
})
export class TheatersComponent implements OnInit {

  public movie: MovieData = <MovieData>{}
  public theatersShowingMovie: TheaterData[] = []
  public paramSubscription: Subscription = <Subscription>{};
  public isLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private movieCatalogueService:MovieCatalogueService) {
    this.paramSubscription = this.route.params.subscribe((params: any) => {
      let id: string = params['id']
      this.movieCatalogueService.catchTheatersShowingTheMovie(id).subscribe(theaters => {
        this.theatersShowingMovie = theaters as TheaterData[]
        this.movieCatalogueService.getMoviesFromApi().subscribe(movies => {
          movies.forEach(movie => {
            if(movie.id === theaters[0].eventId) {
              this.movie = movie;
            }
          })
          this.isLoaded = true
        })
      })
    })
  }

  ngOnInit(): void {
  }

}
