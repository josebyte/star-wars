import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable} from 'rxjs';
import { ShipsService} from '../../services/ships.service';
import { Location} from '@angular/common';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.sass']
})
export class ShipDetailsComponent implements OnInit {
  loading = true;
  id: number;
  starship$: Observable<any>; // todo: ship model

  constructor(
    private route: ActivatedRoute,
    private shipsService: ShipsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
      this.starship$ = this.shipsService.loadShipDetails(this.id);
      this.loading = false;
    });
  }

  back(): void {
    this.location.back();
  }

}
