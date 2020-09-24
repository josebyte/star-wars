import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipComponent } from './ship.component';
import {ShipsService} from '../../services/ships.service';

describe('ShipComponent', () => {
  let component: ShipComponent;
  let fixture: ComponentFixture<ShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipComponent ],
      imports: [ ShipsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
