import { Component, EventEmitter, HostListener, Inject, Input, OnInit } from '@angular/core';
import { MobileCheckService } from 'src/app/services/mobile-check.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  public readonly clickEvent: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(@Inject(MobileCheckService) private mobileCheckService: MobileCheckService, private router: Router) {
    // fjfjfjf
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
    const params ={ eventId: movieId }
    this.router.navigate(['theaters'], { queryParams: params })
    this.clickEvent.emit(['',JSON.stringify(params)])
  }

  // public movieTitleFormartter(title: string): string {
  //   const splitTitle = title.split('');
  //   const titleLenght = splitTitle.length
  //   const titleWithRetissences = splitTitle.slice(0,-2).join('').concat('...');
  //   if(titleLenght > this.titleLetterLimit) {
  //     return titleWithRetissences;
  //   }
  //   return title;
  // }

}
