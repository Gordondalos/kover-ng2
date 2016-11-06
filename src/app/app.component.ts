import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component ( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.sass' ]
} )
export class AppComponent {

    title = 'app works!';


    constructor(private router : Router,){  }

    locat_login(){
        var locat = window.location.pathname;
        console.log(locat);
        if(locat == '/user/login'){
            return false;
        }else{
            return true;
        }
    }
}
