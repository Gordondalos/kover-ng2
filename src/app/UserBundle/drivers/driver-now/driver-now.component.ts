import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../CommonBundle/common.service";

@Component ( {
    selector : 'driver-now',
    templateUrl : './driver-now.component.html',
    styleUrls : [ './driver-now.component.sass' ]
} )
export class DriverNowComponent implements OnInit {

    private commonServices : CommonService;
    private voditelNow;
    private sortColumn : string = 'closeZakaz';
    private upOrDown : boolean = false;

    setThisVoditelInZakaz ( voditel ) {
        this.commonServices.setThisVoditelZakazs ( voditel );
    }


    constructor ( commonServices : CommonService ) {
        this.commonServices = commonServices;
    }

    openZakaz ( openZakaz ) {
        this.sortColumn = openZakaz;
    }

    closeZakaz ( closeZakaz ) {
        this.sortColumn = closeZakaz;
    }


    ngOnInit () {

        this.commonServices.getJobNow ()
            .then ( data => {
                console.log ( data );
                this.voditelNow = data;

            } );

        // this.voditelNow = [
        //     { 'name' : 'Василий', 'openZakaz' : '1', 'closeZakaz' : '6' },
        //     { 'name' : 'Коля', 'openZakaz' : '2', 'closeZakaz' : '5' },
        //     { 'name' : 'Сергей', 'openZakaz' : '3', 'closeZakaz' : '4' },
        //     { 'name' : 'Эдик', 'openZakaz' : '4', 'closeZakaz' : '5' },
        //     { 'name' : 'Миша', 'openZakaz' : '5', 'closeZakaz' : '5' },
        //     { 'name' : 'Анатолий Иванович', 'openZakaz' : '3', 'closeZakaz' : '4' },
        //     { 'name' : 'Лев', 'openZakaz' : '7', 'closeZakaz' : '3' },
        //     { 'name' : 'Гарик Сукачев', 'openZakaz' : '8', 'closeZakaz' : '1' } ]

    }


}
