import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieCardComponent } from './movie-card/movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  ],
  exports: [MoviesComponent],
  providers: [HttpClient]
})
export class MoviesModule { }
