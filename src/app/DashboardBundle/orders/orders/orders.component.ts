import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  hideElem(element){
    $(element).hide();
  }

  ngOnInit() {
  }

}
