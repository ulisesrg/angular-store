import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MaterialModule, SharedModule],
})
export class OrderRoutingModule {}
