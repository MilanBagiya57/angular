import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from "./create-product/create-product.component";
import { GeneralComponent } from "./general.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [{
    path: '',
    component: GeneralComponent,

    children: [{
        path: '',
        pathMatch: 'prefix',
        component: ProductListComponent,
    },
    {
        path: 'create-product',
        component: CreateProductComponent
    }, {
        path: 'update-product',
        component: ProductEditComponent
    }]

}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GeneralRoutingModule { }