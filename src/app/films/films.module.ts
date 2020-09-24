import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmListComponent } from './containers/film-list/film-list.component';
import { FilmComponent } from './components/film/film.component';
import { AuthGuard } from '../auth/auth.guard';
import { FilmsService } from './services/films.service';


@NgModule({
  declarations: [FilmListComponent, FilmComponent],
  providers: [
    FilmsService,
    AuthGuard
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
