import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./movies/movies.module').then(module => module.MoviesModule)
  },
  {
    path: 'theaters',
    loadChildren: () => import('./theaters/theaters.module').then(module => module.TheatersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
