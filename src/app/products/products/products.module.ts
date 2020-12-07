import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainer } from './containers/products.container';
import { ProductComponent } from '../product/components/product/product.component';

import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [ProductsContainer, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialModule],
})
export class ProductsModule {}
