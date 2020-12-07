import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailContainer } from './containers/product-detail/product-detail.container';

import { ProductDetailRoutingModule } from './product-detail-routing.module';

@NgModule({
  declarations: [ProductDetailContainer],
  imports: [CommonModule, ProductDetailRoutingModule],
})
export class ProductDetailModule {}
