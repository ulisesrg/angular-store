import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/2020_review.webp',
  //     title: '2020 Shirt',
  //     price: 80000,
  //     description:
  //       'Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/adan_wash.webp',
  //     title: 'Wash Shirt',
  //     price: 80000,
  //     description:
  //       'Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/cobra_kai.webp',
  //     title: 'Cobra Kai Shirt',
  //     price: 80000,
  //     description:
  //       'Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/miyagido.webp',
  //     title: 'Miyagi Do Shirt',
  //     price: 80000,
  //     description:
  //       'Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/phil_barrera.webp',
  //     title: 'Phil Barrera Shirt',
  //     price: 80000,
  //     description:
  //       'Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/images/ruined_birthday.webp',
  //     title: 'Ruined Birthday Shirt',
  //     price: 80000,
  //     description:
  //       'Est quae nostrum ducimus omnis distinctio iste, commodi beatae totam dolore, officiis, natus dicta et?',
  //   },
  // ];
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products');
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}
