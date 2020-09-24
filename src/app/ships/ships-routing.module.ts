import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipListComponent } from './containers/ship-list/ship-list.component';
import { ShipDetailsComponent} from './containers/ship-details/ship-details.component';
import { AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
  { path: ':pag',
    component: ShipListComponent,
    canActivate: [AuthGuard]
  },
  { path: 'ship-details/:id',
    component: ShipDetailsComponent,
    canActivate: [AuthGuard]
  },
  { path: '',
    component: ShipListComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipsRoutingModule { }
