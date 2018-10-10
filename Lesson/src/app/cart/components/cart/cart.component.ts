import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/CartItemModel';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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
