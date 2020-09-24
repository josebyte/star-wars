import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FilmsService {

  constructor(
    private http: HttpClient,
  ) { }

  loadFilms(payload?: { page: number }): Observable<any> { // todo: create film model
    return this.http.get(environment.api.films + '?page=' + payload.page);
  }

  loadFilmDetails(id: number): Observable<any> { // todo: create film model
    return this.http.get(environment.api.films + id);
  }
}
