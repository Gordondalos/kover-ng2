import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../CommonBundle/common.service";

@Component ( {
    selector : 'order-create',
    templateUrl : './order-create.component.html',
    styleUrls : [ './order-create.component.sass' ]
} )
export class OrderCreateComponent implements OnInit {


    placeholder = 'Выберите телефон';
    private commonService : CommonService;
    private options : any = [];
    private client : any = [];
    private adressDostavki : string;
    private ringPhone : string;
    private voditel : any;
    private zavedeniya : any;
    private organization : any = '';
    private description : string = '';

    constructor ( commonService : CommonService ) {
        this.commonService = commonService;

        this.commonService.thisUserChanges$.subscribe (
            ( eventData ) => {
                this.updateClient ( eventData );
            } );

        this.commonService.setThisAdresss$.subscribe (
            ( eventData ) => {
                this.setThisAderess ( eventData );
            } );

        this.commonService.setThisPhones$.subscribe (
            ( eventData ) => {
                this.setThisPhone ( eventData );
            } );

        this.commonService.setThisVoditelZakazs$.subscribe (
            ( eventData ) => {
                this.setThisVoditel ( eventData );
            } );
    }


    setThisVoditel ( eventData ) {
        this.voditel = eventData;
    }


    setThisPhone ( eventData ) {
        this.ringPhone = eventData;
    }

    setThisAderess ( eventData ) {
        this.adressDostavki = eventData;
    }


    updateClient ( eventData ) {
        this.client = eventData;
    }

    selectZavedenie ( event ) {
        this.organization = event[ 0 ];
    }

    buttonCreateReady () {
        if (
            this.client && this.client.fio &&
            this.adressDostavki && this.adressDostavki.length &&
            this.ringPhone && this.ringPhone.length &&
            this.voditel && this.voditel.fio &&
            this.organization && this.organization.text &&
            this.description && this.description.length
        ) {
            return false;
        } else {
            return true;
        }
    }

    addNewOrder () {
        if (
            this.client && this.client.fio &&
            this.adressDostavki && this.adressDostavki.length &&
            this.ringPhone && this.ringPhone.length &&
            this.voditel && this.voditel.fio &&
            this.organization && this.organization.text &&
            this.description && this.description.length) {

            // неделаем ничего

        } else {
            return false;
        }
    }


    // событие выбора клиента, возвращает обьект в котором есть айдишник клиента и его телефон
    selectData ( event : any ) {
        this.ringPhone = event[ 0 ].text;

        this.commonService.getClientById ( event[ 0 ].value )
            .then( client => {
                this.client = client;
                this.client.fio = client['name']+' '+client['lastname'];
            });







        this.commonService.setThisUsers ( this.client );
    }


    ngOnInit () {
        this.commonService.getOrganization ()
            .then (
                data => {
                    this.zavedeniya = data;
                }
            );


        this.commonService.getClientsPhone ()
            .then (
                data => {
                    this.options = data;
                }
            );
    }

}
