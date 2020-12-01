import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})

export class ProductComponent {
  // since it is asking to initalize this member...
  @Input() product: Product = {
    id: '',
    image: '',
    title: '',
    price: 0,
    description: '',
  };
  // or...
  // @Input() product?: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addToCart(): void {
    console.log('added to cart');
    this.productClicked.emit(this.product.id);
  }
}
