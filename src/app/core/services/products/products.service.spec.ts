import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { environment } from '../../../../environments/environment';

fdescribe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getAllProducts', () => {
    it('should return products', () => {
      // arrange
      const expectedData = [
        {
          id: '1',
          image: 'img/img.png',
          title: 'title',
          price: 1212,
          description: 'description',
        },
        {
          id: '2',
          image: 'img/img2.png',
          title: 'title 2',
          price: 326,
          description: 'description 2',
        },
      ];
      let dataError;
      let dataResponse: any;

      // act
      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );

      const req = httpTestingController.expectOne(
        `${environment.url_api}/products`
      );
      req.flush(expectedData);

      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
