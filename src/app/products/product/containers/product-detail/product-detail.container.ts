import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@core/models/product.model';
import { ProductsService } from '../../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.container.html',
  styleUrls: ['./product-detail.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ProductDetailContainer implements OnInit {
  product: Product = {
    id: '',
    image: '',
    title: '',
    price: 0,
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // to prevent being undefined, need to add || this.product;
      // this.product = this.productsService.getProduct(id) || this.product;
      // console.log(this.product);

      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct(): void {
    const newProduct: Product = {
      id: '221',
      image: 'assets/images/hoodie.png',
      title: 'Red Sweater',
      price: 2409,
      description: 'A description',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct(id?: string): void {
    const updateProduct: Partial<Product> = {
      title: 'Black Sweater',
      price: 5010,
    };
    this.productsService
      .updateProduct('221', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct(id?: string): void {
    this.productsService.deleteProduct('221').subscribe((response) => {
      console.log(response);
    });
  }
}
