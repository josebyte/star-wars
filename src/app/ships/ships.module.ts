import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipsRoutingModule } from './ships-routing.module';
import { ShipListComponent } from './components/ship-list/ship-list.component';
import { ShipComponent } from './components/ship/ship.component';
import { ShipDetailsComponent } from './components/ship-details/ship-details.component';
import { ShipsService} from './services/ships.service';
import { AuthGuard} from '../auth/auth.guard';

@NgModule({
  declarations: [ShipListComponent, ShipComponent, ShipDetailsComponent],
  providers: [
    ShipsService,
    AuthGuard
  ],
  imports: [
    CommonModule,
    ShipsRoutingModule
  ]
})
export class ShipsModule { }
