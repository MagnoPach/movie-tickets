import { Component, EventEmitter, HostListener, Inject, Input, OnInit } from '@angular/core';
import { MobileCheckService } from 'src/app/services/mobile-check.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MovieData } from 'src/app/models/movie.model';
import { IDataNavigation, NavigationContentService } from 'src/app/services/navigation-content.service';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: MovieData = <MovieData>{};

  public isMobile: boolean = false;

  constructor(@Inject(MobileCheckService) private mobileCheckService: MobileCheckService,  @Inject(NavigationContentService) private navigationContentService: NavigationContentService, private router: Router) {
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
    const params: object = { eventId: movieId }
    // const navigationData = Object.assign(<IDataNavigation>{}, {route:'theaters', param:{eventId: movieId}})
    const navigationData = Object.assign(<IDataNavigation>{}, {route:'/'})
    this.router.navigate(['movies', movieId])
    this.sendNavigationData(navigationData)
  }

  private sendNavigationData(navigationData: IDataNavigation): void {
    this.navigationContentService.sendNavigationData(navigationData);
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
