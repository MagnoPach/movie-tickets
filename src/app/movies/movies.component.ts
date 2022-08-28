import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieData } from '../models/movie.model';
import { MobileCheckService } from '../services/mobile-check.service';

import { MovieCatalogueService } from '../services/movie-catalogue.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public moviesCataloge: MovieData[] = [];
  public searchingText: string = '';
  public isMobile: boolean = false;


  constructor(@Inject(MobileCheckService) private mobileCheckService: MobileCheckService, private movieCatalogueService: MovieCatalogueService) {
    this.movieCatalogueService.getMoviesFromApi().subscribe(movies => {
        this.moviesCataloge = movies as MovieData[]
    })
  }

  ngOnInit(): void {
    this.handleUpdateDevice();
  }

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
		event && this.handleUpdateDevice();
	}

  private handleUpdateDevice(): void {
    this.isMobile = this.mobileCheckService.updateDevice();
  }

  public cleanSearchBar(): void {
    this.searchingText = '';
  }

  public grabFilteredMovies(): MovieData[] {
		const temasFiltrados: MovieData[] = this.moviesCataloge.filter((movie) => {
      return movie.title.includes(this.searchingText);
    })
		return temasFiltrados;
	}

  public comunicarRegulamento(): void {
		// if (this.valeData && this.valeData.opcoes.promotionID > 0) {
		// 	this.valeService.getPolicy(this.valeData.opcoes.promotionID)
		// 		.subscribe((policy: IDataPolicy) => {
		// 			if (policy && (policy.conteudo || "").length > 0) {
		// 				this.textModal.open("", `<div class='regulamento-promocoes text-left'>
		// 					${policy.conteudo
		// 						.replace(/<p>/gi, "<p class='mb-4'>")
		// 						.replace(/<a /gi, "<a class='font-bold text-primary1' ")
		// 					}</div>`);
		// 			}
		// 		}, (error: Error) => {
		// 			console.error("Problema ao carregar o regulamento", error);
		// 			this.simpleModal.open("Problema ao carregar o regulamento", "Tente novamente mais tarde");
		// 		});
		// }
	}

}
