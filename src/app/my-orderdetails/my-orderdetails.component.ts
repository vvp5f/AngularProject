import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-orderdetails',
  templateUrl: './my-orderdetails.component.html',
  styleUrls: ['./my-orderdetails.component.css']
})
export class MyOrderdetailsComponent
{
  orders: Observable<any[]>;
  allorders: any[];

  constructor(db: AngularFireDatabase,
    ) 
  {
    this.orders = db.list('/orders').valueChanges();
    this.orders.subscribe(orders => {
      this.allorders = orders;
      console.log(this.allorders);
    })

    console.log(this.orders)
   
  }


 
  ngOnInit() {
  }

}
