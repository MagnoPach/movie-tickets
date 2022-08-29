import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IDataNavigation {
  route: string,
  param?: {
    eventId:string
  }
}

@Injectable()
export class NavigationContentService {
    private navigationText = new Subject<IDataNavigation>();

    public sendNavigationData(message: IDataNavigation) {
        this.navigationText.next(message);
    }

    public clearNavigationData() {
        this.navigationText.next(<IDataNavigation>{});
    }

    public getNavigationData(): Observable<IDataNavigation> {
        return this.navigationText.asObservable();
    }
}
