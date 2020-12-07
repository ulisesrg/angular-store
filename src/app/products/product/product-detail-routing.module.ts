import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailContainer } from './containers/product-detail/product-detail.container';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailRoutingModule {}
