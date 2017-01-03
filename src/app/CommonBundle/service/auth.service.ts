import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';


@Injectable ()
export class AuthGuard implements CanActivate {

    private token : string;

    private router : Router;

    constructor ( router : Router ) {
        this.router = router;

    }

    canActivate ( next : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {

        return true;


    }
}