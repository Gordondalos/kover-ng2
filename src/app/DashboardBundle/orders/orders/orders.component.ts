import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../order.service";
declare let $ : any;


@Component ( {
    selector : 'orders',
    templateUrl : './orders.component.html',
    styleUrls : [ './orders.component.sass' ],
    providers : [ OrderService ]
} )
export class OrdersComponent implements OnInit {


    private orders : any = [];
    private orderStatus;
    private orderService : OrderService;


    constructor ( orderService : OrderService ) {
        this.orderService = orderService;
    }

    selectStatus ( event ) {
        console.log ( event );
    }


    hideElem ( element ) {
        $ ( element ).hide ();
    }

    ngOnInit () {
        this.orderStatus = this.orderService.getOrderStatus ();
        this.orderService.getOrders ()
            .then ( data => {


                data.forEach ( order => {
                    let status = order[ 'statusorder' ];
                    this.orderStatus.forEach ( st => {
                        if ( st[ 'value' ] == status ) {
                            order.status = {};
                            order[ 'status' ].text = st[ 'text' ];
                            order[ 'status' ].value = st[ 'value' ];
                        }
                    } );

                    let voditel = order[ 'voditel' ];

                    // подтянем водителей
                    this.orderService.getById ( 'Voditel', voditel )
                        .then ( data => {
                            let voditelInfo = JSON.parse ( data[ '_body' ] )[ 'data' ][0];
                            order['driver'] = {};
                            order['driver'].fio = voditelInfo.name;
                            order['driver'].phone = voditelInfo.phone;
                            order['driver'].car = voditelInfo.car;
                        } );


                    console.log ( order );

                } );
                console.log ( data );
                this.orders = data;
            } );


    }

}
