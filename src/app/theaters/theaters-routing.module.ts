import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCatalogueService } from '../services/movie-catalogue.service';
import { TheatersComponent } from './theaters.component';

const routes: Routes = [
    {
        path: '',
        component: TheatersComponent,
        children: [
            // {
            //     path: 'theaters',
            //     component: TermsComponent
            // },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [MovieCatalogueService],
    exports: [RouterModule]
})
export class TheatersRoutingModule { }
