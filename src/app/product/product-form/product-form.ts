import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {
  loading = false;
  submitted = false;
  form!: FormGroup;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      PRODUCT_CODE: ['',],
      PRODUCT_NAME: ['', Validators.required],
      CATEGORY: ['', Validators.required],
      PRICE: ['', Validators.required, Validators.min(0)],

    })
  }

  get f() {
    return this.form.controls;

  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.createData();
  }

  private createData(): void {
    this.productService.createData(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          alert('Data Created Successfully.');
          this.router.navigate(['/products']);
        },
        error: err => {
          alert('Error: ' + err);
          console.log(err);
          this.loading = false;
        }
      });
  }
}
