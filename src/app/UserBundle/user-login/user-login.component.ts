import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component ( {
    selector : 'user-login',
    templateUrl : './user-login.component.html',
    styleUrls : [ './user-login.component.sass' ]
} )
export class UserLoginComponent implements OnInit {

    constructor (private router: Router) { }

    getUser(){

        this.router.navigate(['/main']);
    }

    ngOnInit () {
    }

}
