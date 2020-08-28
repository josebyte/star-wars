import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.sass']
})
export class ShipComponent implements OnInit {
  @Input() starship;

  constructor() { }

  ngOnInit(): void {
  }

  getShipId() {
    const url = this.starship.url;
    return url.split('/').filter( item => item !== '').slice(-1)[0];
  }

}
