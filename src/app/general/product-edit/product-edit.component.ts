import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;

  constructor(private _dataService: DataService, private formBuilder: FormBuilder, private router: Router, public datepipe: DatePipe) {

    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      quntity: [, Validators.required],
      price: [, Validators.required],
      matufacture_date: ['', Validators.required],
      expiry_date: ['', Validators.required],
    });

    this._dataService.sharedParam.subscribe((param: any) => {
      if (param) {

        const matufacture_date = param?.map((element: any) => {
          return this.datepipe.transform(element.matufacture_date, 'yyyy-MM-dd')
        });

        const expiry_date = param?.map((element: any) => {
          return this.datepipe.transform(element.expiry_date, 'yyyy-MM-dd')
        });


        this.productForm.controls['name'].setValue(param[0].name);
        this.productForm.controls['category'].setValue(param[0].category);
        this.productForm.controls['quntity'].setValue(param[0].quntity);
        this.productForm.controls['price'].setValue(param[0].price);
        this.productForm.controls['matufacture_date'].setValue(matufacture_date);
        this.productForm.controls['expiry_date'].setValue(expiry_date);
      }
    })
  }

  ngOnInit() {
  }

  onSave() {
    if (this.productForm.value) {
      this._dataService.changeParam(this.productForm.value);
      this.router.navigateByUrl('/')
    }
  }

}
