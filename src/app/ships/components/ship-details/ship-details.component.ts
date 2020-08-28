import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.sass']
})
export class ShipDetailsComponent implements OnInit {

  starship;

  constructor() { }

  ngOnInit(): void {
  }

}
