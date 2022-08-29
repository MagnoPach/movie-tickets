import { Component, HostListener, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IMovieParam } from './models/params.model';
import { MovieCardComponent } from './movies/movie-card/movie-card/movie-card.component';
import { IDataNavigation, NavigationContentService } from './services/navigation-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public currentParam: IMovieParam = <IMovieParam>{};
  public navigationData: IDataNavigation = <IDataNavigation>{};
  public streamshopLogo: string = '../assets/icons/logo-streamshop.jpg';
  public currentRoute: string = '';
  public isHome: any = '';
  private subscription: Subscription;

  constructor(private router: Router, @Inject(NavigationContentService) private navigationContentService: NavigationContentService) {
    this.subscription = this.navigationContentService.getNavigationData().subscribe(navigation => {
      this.navigationData = navigation;
    });
  }
  public backArrowButton(): void {
    if(this.navigationData.param) {
      this.router.navigate([`${this.navigationData.route}`], {queryParams: this.navigationData.param})
    } else {
      this.router.navigate([`${this.navigationData.route}`])
    }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  @HostListener('window:popstate', ['$event'])
	onResize(event: any) {
    this.isHome = location.href;
		// event && this.handleUpdateDevice();
	}
}
