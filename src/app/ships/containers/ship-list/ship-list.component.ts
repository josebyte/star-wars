import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../../services/ships.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ships',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.sass']
})
export class ShipListComponent implements OnInit {
  starships$: Observable<any>; // todo: create ship model

  constructor(
    private shipsService: ShipsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let page = 1;
      if (params.pag) {
        page = params.pag;
      }
      this.starships$ = this.shipsService.loadShips({page});
    });
  }

  goToPage(url): void {
    const page = url.split('page=')[1];
    this.router.navigate(['/ships/' + page]);
  }

}
