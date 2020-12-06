import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-creation-form',
  templateUrl: './product-creation-form.component.html',
  styleUrls: ['./product-creation-form.component.scss'],
})
export class ProductCreationFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  image$: Observable<any> = new Observable();

  constructor(
    private formbuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.form) {
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm(): void {
    this.form = this.formbuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isValidPrice]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  uploadFile(event: any): void {
    // The image is being uploaded when it is selected with the input file,
    // this could be something to fix so the image is uploaded when de product is created

    const file = event.target.files[0];
    // console.log(file, 'file');
    const name = file.name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url) => {
            this.form.get('image')?.setValue(url);
          });
        })
      )
      .subscribe();
  }

  get priceField(): AbstractControl | null {
    return this.form.get('price');
  }
}
