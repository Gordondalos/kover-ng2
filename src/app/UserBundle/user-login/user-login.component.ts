import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CommonService } from "../../CommonBundle/common.service";

@Component ( {
    selector : 'user-login',
    templateUrl : './user-login.component.html',
    styleUrls : [ './user-login.component.sass' ]
} )
export class UserLoginComponent implements OnInit {

    constructor (private router: Router, private commonService: CommonService) { }

    private name: string;
    private password: string;

    getUser(){

        let userLoginAndPassword = {'name': this.name, 'password': this.password}
        this.commonService.getUser(userLoginAndPassword)
            .then(data => {
               if(data['_body'].length > 0){
                   let user = JSON.parse(data['_body'])['user'];
                   this.commonService.setUser(user);
                   this.router.navigate(['/main']);
               }
            });

    }

    ngOnInit () {
    }

}
