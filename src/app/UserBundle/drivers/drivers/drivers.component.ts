import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../CommonBundle/common.service";

declare let $: any;


@Component ( {
    selector : 'drivers',
    templateUrl : './drivers.component.html',
    styleUrls : [ './drivers.component.sass' ]
} )
export class DriversComponent implements OnInit {

    commonService : CommonService;

    constructor ( commonService : CommonService ) {
        this.commonService = commonService;
    }

    driverNowFull : any = [];
    driverNowid : any = [];

    checkThisDriver ( elem, id ) {
        // mdi-checkbox-marked
        if ( $ ( elem ).hasClass ( 'mdi-checkbox-blank-outline' ) ) {
            $ ( elem ).removeClass ( 'mdi-checkbox-blank-outline' );
            $ ( elem ).addClass ( 'mdi-checkbox-marked' );
            this.driverNowid.push ( id );

        } else {
            $ ( elem ).removeClass ( 'mdi-checkbox-marked' );
            $ ( elem ).addClass ( 'mdi-checkbox-blank-outline' );
            this.driverNowid.forEach ( ( item, index ) => {
                if ( item == id ) {
                    this.driverNowid.splice ( index, 1 );
                }
            } );

        }


    }

    sendJobNow () {
        this.commonService.saveJobNow ( this.driverNowid );
    }

    getJobNow () {
        return this.commonService.getJobNow ()
    }

    driver : any = [];

    getDeiverNow ( id ) {
        let dn = false;
        this.driverNowFull.forEach ( item => {
            if ( item.id == id ) {
                dn = true;
            }
        } );
        return dn;
    }


    ngOnInit () {

        this.getJobNow ()
            .then ( data => {
                if(data){
                    console.log(data);
                    this.driverNowFull = data;
                    this.driverNowFull.forEach ( item => {
                        this.driverNowid.push ( item.id );
                    } )
                }
            } );
        this.commonService.getAllVoditel ()
            .then ( data => {
                this.driver = data;
            } )
    }

}
