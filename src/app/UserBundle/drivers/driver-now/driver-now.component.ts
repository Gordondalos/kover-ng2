import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../CommonBundle/common.service";

@Component ( {
    selector : 'driver-now',
    templateUrl : './driver-now.component.html',
    styleUrls : [ './driver-now.component.sass' ]
} )
export class DriverNowComponent implements OnInit {

    private commonServices: CommonService;
    private voditelNow;
    private sortColumn: string ='closeZakaz';
    private upOrDown: boolean = false;

    constructor (commonServices: CommonService) {
        this.commonServices = commonServices;
    }

    openZakaz(openZakaz){
        this.sortColumn = openZakaz;
    }

    closeZakaz(closeZakaz){
        this.sortColumn = closeZakaz;
    }



    ngOnInit () {
        this.voditelNow = this.commonServices.getVoditelNow();
    }

}
