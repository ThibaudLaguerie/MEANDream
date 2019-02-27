import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './products-list/product-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
declarations: [
  ProductCreateComponent,
  ProductListComponent,
  ProductCartComponent
],
imports: [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  AngularMaterialModule,
  RouterModule
]

})
export class ProductsModule {}
