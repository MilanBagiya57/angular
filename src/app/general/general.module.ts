import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    imports: [
        GeneralRoutingModule,
        SharedModule,
    ],
    declarations: [
        GeneralComponent,
        ProductListComponent,
        CreateProductComponent,
        ProductEditComponent
    ],
    exports: [
    ]
})
export class GeneralModule { }
