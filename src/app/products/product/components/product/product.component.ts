import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Product } from '../../../../product.model';
import { CartService } from '../../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent
  implements /* OnChanges, */ OnInit, DoCheck, OnDestroy {
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

  today = new Date();

  constructor(private cartService: CartService) {
    console.log('1. cycle constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('2. cycle ngOnChanges', changes);
  // }

  ngOnInit(): void {
    console.log('3. cycle ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4. cycle ngDoCheck');
  } // Warning Declaring ngDoCheck and ngOnChanges method in a class is not recommended

  ngOnDestroy(): void {
    console.log('5. cycle ngOnDestroy');
  }

  addToCart(): void {
    console.log('added to cart');
    this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }
}
