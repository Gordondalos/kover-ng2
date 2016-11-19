import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from "../../CommonBundle/common.service";

@Component ( {
    selector : 'client-info',
    templateUrl : './client-info.component.html',
    styleUrls : [ './client-info.component.sass' ]
} )
export class ClientInfoComponent implements OnInit {

    @Input()
    private client;
    private showPhone: boolean = false;
    private showAdress: boolean = false;
    private newPhone: string;
    private newAdress: string;

    private commonService: CommonService;

    constructor (commonService: CommonService) {
        this.commonService = commonService;

        this.commonService.setThisUsers$.subscribe (
            ( eventData ) => {
                this.setUser ( eventData );
            } );
    }

    setUser(eventData){
        this.client = eventData;
    }

    showPhoneAdd(){
        this.showPhone = !this.showPhone;
    }

    showAdressAdd(){
        this.showAdress = !this.showAdress;
    }

    ngOnInit () {

    }

    saveClient(client,newPhone,newAdress){
        if(newPhone){
            let phone = true;
            this.client.phones.forEach(function ( item ) {
                if(item == newPhone){
                    phone = false
                }
            });
            if(phone){
                this.client.phones.push(newPhone);
            }
        }
        if(newAdress){
            let adres = true;
            this.client.phones.forEach(function ( item ) {
                if(item == newPhone){
                    adres = false
                }
            });
            if(adres){
                this.client.adreses.push(newAdress);
            }

        }
        this.commonService.saveClient(client, client.id);
    }

    canseladdPhoneAndAdressClient(){
        this.newAdress = '';
        this.newPhone = '';
        this.showPhone = false;
        this.showAdress = false;
    }

}
