import { OrderService } from 'src/app/shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$;

  constructor(private orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
    
  }



  ngOnInit() {
  }

}
