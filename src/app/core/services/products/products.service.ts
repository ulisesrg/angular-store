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
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos corrupti repellat, totam quae ipsum? Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
    },
    {
      id: '2',
      image: 'assets/images/adan_wash.webp',
      title: 'Wash Shirt',
      price: 80000,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos corrupti repellat, totam quae ipsum? Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
    },
    {
      id: '3',
      image: 'assets/images/cobra_kai.webp',
      title: 'Cobra Kai Shirt',
      price: 80000,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos corrupti repellat, totam quae ipsum? Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
    },
    {
      id: '4',
      image: 'assets/images/miyagido.webp',
      title: 'Miyagi Do Shirt',
      price: 80000,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos corrupti repellat, totam quae ipsum? Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
    },
    {
      id: '5',
      image: 'assets/images/phil_barrera.webp',
      title: 'Phil Barrera Shirt',
      price: 80000,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos corrupti repellat, totam quae ipsum? Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
    },
    {
      id: '6',
      image: 'assets/images/ruined_birthday.webp',
      title: 'Ruined Birthday Shirt',
      price: 80000,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos corrupti repellat, totam quae ipsum? Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
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
