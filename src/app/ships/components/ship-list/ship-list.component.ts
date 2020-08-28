import { Component, OnInit } from '@angular/core';
import {ShipsService} from '../../services/ships.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ships',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.sass']
})
export class ShipListComponent implements OnInit {
  starships$: Observable<any>; // todo: create ship model

  constructor(
    private shipsService: ShipsService
  ) { }

  ngOnInit(): void {
    this.starships$ = this.shipsService.loadShips({page: 1});
  }

  goToPage(url): void {
    const page = url.split('page=')[1];
    this.starships$ = this.shipsService.loadShips({page});
  }



}
