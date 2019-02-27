import { Component } from '@angular/core';
import { Product } from '../product.model';
import { Cart } from '../cart.model';
import { ProductsService } from '../products.service';
import { PageEvent } from '@angular/material';
import { AuthService } from 'src/app/authentication/authentication.service';

@Component ({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})

export class ProductCartComponent {

  constructor(public productsService: ProductsService, private authService: AuthService) {}

}
