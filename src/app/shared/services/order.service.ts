import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private db: AngularFireDatabase) { }

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  storeOrder(order)
  {
    this.db.list('/orders').push(order);
  }
  getOrders() {
    return this.db.list('/orders').valueChanges();
  }
  
  delete(order) {
    return this.db.object('/orders/' + order).remove();
  }

  get(productId) {
    return this.db.object('/products/' + productId);
  }


  // getAll() {
  //   return this.db.list('/orders', ref => (ref.orderByChild('name')))
  //   .snapshotChanges().pipe(
  //     map(actions => 
  //       actions.map(a => ({ key: a.key, ...a.payload.val() }))
  //     )
  //   );
  // }
  getOrdersByUser(orderByChild) {
    return this.db.list('/orders', 
    ref => ref.orderByChild('userId').equalTo(orderByChild)).valueChanges();
  }
}
