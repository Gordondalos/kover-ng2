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

    /**
     * Данный метод определяет на какой я странице в данный момент, если на логинке то false, в противном случае true
     * @return {boolean}
     */
    locat_login(){
        var locat = window.location.pathname;
        if(locat == '/user/login'){
            return false;
        }else{
            return true;
        }
    }
}
