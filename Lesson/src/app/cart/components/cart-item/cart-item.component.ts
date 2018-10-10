import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItemModel } from '../../models/CartItemModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  cartComponents: Array<CartItemModel>;
  constructor() { 
    this.cartComponents = [
    new CartItemModel(1, 'Book 1', 10, 'img', 5),
    new CartItemModel(1, 'Book 2', 10, 'img', 2),
    new CartItemModel(1, 'Book 1', 10, 'img', 15)];
  }

  ngOnInit() {
  }

}
