import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../order.service";
declare var $:any;

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit {


  private orders;
  private orderStatus;
  private orderService: OrderService;



  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  selectStatus(event){
    console.log(event);
  }




  hideElem(element){
    $(element).hide();
  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.orderStatus = this.orderService.getOrderStatus();
  }

}
