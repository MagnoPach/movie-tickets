import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { MobileCheckService } from 'src/app/services/mobile-check.service';
import { Router } from '@angular/router';
import { MovieData } from 'src/app/models/movie.model';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: MovieData = <MovieData>{};

  public isMobile: boolean = false;

  constructor(@Inject(MobileCheckService) private mobileCheckService: MobileCheckService, private router: Router) {
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
		event && this.handleUpdateDevice();
	}

  private handleUpdateDevice(): void {
    this.isMobile = this.mobileCheckService.updateDevice();
  }

  public findTheatersShowingTheMovie(movieId: string): void {
    this.router.navigate(['movies', movieId])
  }
}
