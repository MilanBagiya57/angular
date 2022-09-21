import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { categoryType, IProductModel } from 'src/app/models/general.model';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  subs: Subscription;

  products: IProductModel[] = [{
    name: 'test product 1',
    category: categoryType.LIQUID,
    quntity: 50,
    price: 550,
    matufacture_date: new Date(),
    expiry_date: new Date(),
  },
  {
    name: 'test product 2',
    category: categoryType.GAS,
    quntity: 50,
    price: 550,
    matufacture_date: new Date(),
    expiry_date: new Date(),
  },
  {
    name: 'test product 3',
    category: categoryType.SOLID,
    quntity: 50,
    price: 550,
    matufacture_date: new Date(),
    expiry_date: new Date(),
  }, {
    name: 'test product 4',
    category: categoryType.LIQUID,
    quntity: 50,
    price: 550,
    matufacture_date: new Date(),
    expiry_date: new Date(),
  }
  ];

  activityValues: number[] = [0, 100];

  constructor(private _dataService: DataService, private router: Router, private datepipe: DatePipe) {
    this._dataService.sharedParam.subscribe((param: any) => {
      if (param) {
        this.products.push(param)
      }
    })
    this.subs = new Subscription();
  }

  ngOnInit() {
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  editProduct(value: string) {
    const data = this.products.filter(result => result.name === value)
    if (data) {
      this.router.navigateByUrl('update-product');
      this._dataService.changeParam(data);
    }
  }

  setDateField(dateString: string) {
    return this.datepipe.transform(dateString, 'yyyy-MM-dd')
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
