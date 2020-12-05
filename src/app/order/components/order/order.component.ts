import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  // Method: 1
  // orderProducts: {
  //   id: string;
  //   image: string;
  //   title: string;
  //   price: number;
  //   description: string;
  //   quantity: number;
  // }[] = [];

  // Method: 2
  orderProducts$: Observable<
    {
      id: string;
      image: string;
      title: string;
      price: number;
      description: string;
      quantity: number;
    }[]
  >;

  constructor(private cartService: CartService) {
    // Method 1:
    // this.cartService.cart$.subscribe((products) => {
    //     let filteredProducts = products.map((product, index, array) => {
    //       // Return the product just the first time it was found
    //       if (index === array.findIndex((p) => p.id === product.id)) {
    //         // Get how many times the product is repeated
    //         const timesRepeated = products.filter(
    //           (item) => item.id === product.id
    //         ).length;
    //         return { ...product, quantity: timesRepeated };
    //       }
    //       else {
    //         return { ...product, quantity: 0 };
    //       }
    //     });
    //     filteredProducts = filteredProducts.filter(item => item.quantity > 0);
    //     this.orderProducts = filteredProducts;
    // });

    // Method 2
    this.orderProducts$ = this.cartService.cart$.pipe(
      map((products) => {
        const uniqueProducts = products.filter(
          (product, index, array) =>
            index === array.findIndex((p) => p.id === product.id)
        );
        const productsWithQuantities = uniqueProducts.map((uniqueProduct) => {
          const timesRepeated = products.filter(
            (item) => item.id === uniqueProduct.id
          ).length;
          return { ...uniqueProduct, quantity: timesRepeated };
        });
        return productsWithQuantities;
      })
    );
  }

  ngOnInit(): void {}
}
