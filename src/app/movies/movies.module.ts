import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieCardComponent } from './movie-card/movie-card/movie-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TheatersComponent } from './theaters/theaters/theaters.component';
import { NavigationContentService } from '../services/navigation-content.service';
import { TheaterCardComponent } from './theaters/theater-card/theater-card.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent,
    TheatersComponent,
    TheaterCardComponent,
    UserSignupComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  exports: [MoviesComponent],
  providers: [HttpClient, NavigationContentService]
})
export class MoviesModule { }
