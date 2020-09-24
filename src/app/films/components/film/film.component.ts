import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass']
})
export class FilmComponent implements OnInit {
  @Input() film;

  constructor() { }

  ngOnInit(): void {
  }

  getFilmId(): number {
    const url = this.film.url;
    return url.split('/').filter( item => item !== '').slice(-1)[0];
  }

  onImgError(error): void{
    error.target.src = 'assets/img/no-image.png';
  }

}
