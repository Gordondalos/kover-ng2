import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../CommonBundle/common.service";

@Component ( {
    selector : 'order-create',
    templateUrl : './order-create.component.html',
    styleUrls : [ './order-create.component.sass' ]
} )
export class OrderCreateComponent implements OnInit {


    placeholder = 'Выберите телефон';
    private commonService: CommonService;
    private options : any = [];
    private client: any = [];

    constructor (commonService: CommonService) {
        this.commonService = commonService;


    }


    selectData(event: any){
        this.client = this.commonService.getClientById(event[0].value);
        this.commonService.setThisUsers(this.client);
    }


    ngOnInit () {
       this.options = this.commonService.getClientsPhone();
    }

}
