import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../CommonBundle/common.service";

@Component ( {
    selector : 'add-client',
    templateUrl : './add-client.component.html',
    styleUrls : [ './add-client.component.sass' ]
} )
export class AddClientComponent implements OnInit {

    private commonService : CommonService;

    constructor ( commonService : CommonService ) {
        this.commonService = commonService;
    }

    addClient ( fio: string, phone: string, adress: string ) {
        if(fio && phone && adress){
            this.commonService.addClient(fio, phone, adress);
        }
    }

    disabledButtonAdd(fio,phone,adress){
        if(fio && fio.length > 3 && phone && phone.length > 6 && adress && adress.length > 3){
            return false;
        }else{
            return true;
        }
    }

    ngOnInit () {
    }

}
