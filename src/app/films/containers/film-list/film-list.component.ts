import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { FilmsService} from '../../services/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.sass']
})
export class FilmListComponent implements OnInit {
  films$: Observable<any>; // todo: create film model

  constructor(
    private filmsService: FilmsService
  ) { }

  ngOnInit(): void {
    this.films$ = this.filmsService.loadFilms({page: 1});
  }

  goToPage(url): void {
    const page = url.split('page=')[1];
    this.films$ = this.filmsService.loadFilms({page});
  }

}
