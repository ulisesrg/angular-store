import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // ProductsService
    // it is told that this one should be removed since the service has providedIn: 'root',
  ],
})
export class CoreModule {}
