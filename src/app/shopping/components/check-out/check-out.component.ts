import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { OrderService } from 'src/app/shared/services/order.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Order } from 'src/app/shared/models/order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {};
  cart: ShoppingCart;
  userId: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
    this.cartSubscription = cart$.subscribe(cart => {
      let temp: any;
      temp = cart.payload.child('/items').val();
      this.cart = new ShoppingCart(temp);
      
    });
    
  }

  async placeOrder()
  {
    let order = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items.map(i => {
          return {
            product: {
              title: i.product.title,
              imageUrl: i.product.imageUrl,
              price: i.product.price
            },
            quantity: i.quantity,
            totalPrice: i.totalPrice
          }
        })
      };


    let result = await this.orderService.storeOrder(order);
    this.router.navigate(['/order-success',  ]);
  }

  ngOnDestroy() 
  {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
  

}
