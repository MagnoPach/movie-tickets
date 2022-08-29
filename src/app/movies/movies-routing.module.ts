import { MoviesComponent } from './movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCatalogueService } from '../services/movie-catalogue.service';
import { TheatersComponent } from './theaters/theaters/theaters.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
    {
        path: 'movies',
        component: MoviesComponent,
    },
    {
      path: 'movies/:id',
      component: TheatersComponent,
    },
    {
        path: 'sign-up/:id',
        component: UserSignupComponent,
    },

    {
      // TODO: Jogar para página não encontrada (404..)
      path: '**',
      pathMatch: 'full',
      redirectTo: 'movies',
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [MovieCatalogueService],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }
