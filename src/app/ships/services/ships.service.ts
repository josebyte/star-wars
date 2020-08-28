import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { of ,  throwError as _throw ,  Observable } from 'rxjs';
import { switchMap ,  catchError } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class ShipsService {

  constructor(
    private http: HttpClient,
  ) { }

  loadShips(payload?: { page: number }): Observable<any> { // todo: create ship model
    return this.http.get(
      environment.api.ships + '?page=' + payload.page
    );
  }

  loadShipInfo(id: number): Observable<any> { // todo: create ship model
    return this.http.get(
      environment.api.ships + '/' + id
    ).pipe(
      this._manageLoad()
    );
  }

  private _manageLoad() {
    return (obs: Observable<any>) => {
      return obs.pipe(
        catchError(e => {
          return _throw('Error de conectividad');
        }),
        switchMap(data => {

          console.log(data);

          if (data.status === 200 || data.status === 204 ) {
            return of(data);
          }
        })
      );
    };
  }
}
