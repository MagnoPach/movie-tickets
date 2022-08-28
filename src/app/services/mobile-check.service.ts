import { EventEmitter, HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileCheckService {

  private innerWidth: number = 0;
  private readonly larguraTelaDesktop: number = 900;

  constructor() { }

  public updateDevice(): boolean {
			this.innerWidth = window.innerWidth;
      return this.innerWidth < this.larguraTelaDesktop;
	}
}
