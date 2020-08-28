import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipListComponent } from './components/ship-list/ship-list.component';
import { ShipDetailsComponent} from './components/ship-details/ship-details.component';

const routes: Routes = [
  { path: '', component: ShipListComponent },
  { path: 'ship-details', component: ShipDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipsRoutingModule { }
