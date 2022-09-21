import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private _dataService: DataService, private formBuilder: FormBuilder, private router: Router) {

    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      quntity: [, Validators.required],
      price: [, Validators.required],
      matufacture_date: ['', Validators.required],
      expiry_date: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.productForm.value) {
      this._dataService.changeParam(this.productForm.value)
      this.router.navigateByUrl('/')
    }
  }
}
