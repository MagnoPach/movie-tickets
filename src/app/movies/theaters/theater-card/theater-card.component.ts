import { TheaterData } from './../../../models/movie.model';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { MobileCheckService } from 'src/app/services/mobile-check.service';
import { IDataNavigation, NavigationContentService } from 'src/app/services/navigation-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theater-card',
  templateUrl: './theater-card.component.html',
  styleUrls: ['./theater-card.component.scss']
})
export class TheaterCardComponent implements OnInit {

  @Input() theater: TheaterData = <TheaterData>{};
  @Input() isLoaded: boolean = false;

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

  public redirectToSignUp(movieId: string): void {
    const params: object = { eventId: movieId }
    const navigationData = Object.assign(<IDataNavigation>{}, {route:'/'})
    this.router.navigate(['/sign-up'], {replaceUrl:true})
    this.sendNavigationData(navigationData)
  }

  private sendNavigationData(navigationData: IDataNavigation): void {
    this.navigationContentService.sendNavigationData(navigationData);
  }

  public formartRoomTypeText(types: string): string {
    const type = types.toString().replace(',', ' ')
    console.log('type', typeof type)
    return type
  }
}
