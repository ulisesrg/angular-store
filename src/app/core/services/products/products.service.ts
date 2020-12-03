import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/2020_review.webp',
      title: '2020 Shirt',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/adan_wash.webp',
      title: 'Wash Shirt',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/cobra_kai.webp',
      title: 'Cobra Kai Shirt',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/miyagido.webp',
      title: 'Miyagi Do Shirt',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'assets/images/phil_barrera.webp',
      title: 'Phil Barrera Shirt',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'assets/images/ruined_birthday.webp',
      title: 'Ruined Birthday Shirt',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];

  constructor() {}

  getAllProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product | undefined {
    return this.products.find((item) => id === item.id);
  }
}
