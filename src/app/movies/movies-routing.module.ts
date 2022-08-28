import { MoviesComponent } from './movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCatalogueService } from '../services/movie-catalogue.service';

const routes: Routes = [
    {
        path: '',
        component: MoviesComponent,
        children: [
            // {
            //     path: 'theaters',
            //     component: TermsComponent
            // },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [MovieCatalogueService],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }
