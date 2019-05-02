import { Product } from './product';

export class ShoppingCartItem {
  title: any;
  price: any;
  imageUrl: any;

    constructor(public product: Product, public quantity: number) {
    }

    get totalPrice() { return this.product.price * this.quantity; }
}
