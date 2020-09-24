import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Injectable()
export class ShipsService {

  constructor(
    private http: HttpClient
  ) { }

  loadShips(payload?: { page: number }): Observable<any> { // todo: create ship model
    return this.http.get(environment.api.ships + '?page=' + payload.page).pipe(first());
  }

  loadShipDetails(id: number): Observable<any> { // todo: create ship model
    return this.http.get(environment.api.ships + id);
  }
}
