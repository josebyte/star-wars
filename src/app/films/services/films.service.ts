import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { CachedHttpClient} from './CachedHttpClient';

@Injectable()
export class ShipsService {

  constructor(
    private httpCached: CachedHttpClient,
  ) { }

  loadShips(payload?: { page: number }): Observable<any> { // todo: create ship model
    return this.httpCached.get(environment.api.ships + '?page=' + payload.page, 300000);
  }

  loadShipDetails(id: number): Observable<any> { // todo: create ship model
    return this.httpCached.get(environment.api.ships + id, 300000);
  }
}
