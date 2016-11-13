import { Component, OnInit } from '@angular/core';

@Component ( {
    selector : 'order-create',
    templateUrl : './order-create.component.html',
    styleUrls : [ './order-create.component.sass' ]
} )
export class OrderCreateComponent implements OnInit {


    placeholder = 'Выберите телефон';
    options : any = [
        {
            "value": "582885c12678edb3015d78bb",
            "text": "+1 (931) 509-2105"
        },
        {
            "value": "582885c10f986244134424c9",
            "text": "+1 (847) 537-2277"
        },
        {
            "value": "582885c15ccce706dc8b4f67",
            "text": "+1 (825) 432-2150"
        },
        {
            "value": "582885c1f9ac62e896b0f3d5",
            "text": "+1 (991) 542-2709"
        },
        {
            "value": "582885c1eedc9f2bd8c4daff",
            "text": "+1 (991) 422-2598"
        },
        {
            "value": "582885c19850a56c4f74f5c8",
            "text": "+1 (970) 459-3867"
        },
        {
            "value": "582885c1961ec69e586d785d",
            "text": "+1 (985) 415-2469"
        },
        {
            "value": "582885c1ea443d1824187b28",
            "text": "+1 (807) 433-2225"
        }
    ];

    constructor () {}

    selectData(event: any){
        console.log(event);
    }

    ngOnInit () {
    }

}
