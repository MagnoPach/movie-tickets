import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IMovieParam } from './models/params.model';
import { MovieCardComponent } from './movies/movie-card/movie-card/movie-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public streamshopLogo: string = '../assets/icons/logo-streamshop.jpg';
  public currentRoute: string = '';
  public currentParam: IMovieParam = <IMovieParam>{};


  constructor(private router: Router) {
  }

  public subscribeToEmmiter(componentRef: any) {
		if (componentRef instanceof MovieCardComponent) {
			const child: MovieCardComponent = componentRef;
			child.clickEvent.subscribe((route: any[]) => {
        console.log(route)
				this.currentRoute = route[0];
				route[1] ? this.currentParam = route[1] : this.currentParam = <IMovieParam>{};
			});
		}
	}
  public backArrowButton(): void {
    if(this.currentParam) {
      this.router.navigate([`${this.currentRoute}`], {queryParams: this.currentParam})
    } else {
      this.router.navigate([`${this.currentRoute}`])
    }
  }
}
