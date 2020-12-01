import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})

export class ProductComponent {
  product: Product = {
    id: '1',
    image: 'assets/images/2020_review.webp',
    title: '2020 Shirt',
    price: 80000,
    description: 'bla bla bla bla bla',
  };
}
