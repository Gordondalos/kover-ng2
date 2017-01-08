import { Injectable } from '@angular/core';
import {CONFIG} from './config';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable ()
export class commonModelService {

    config = CONFIG;

    constructor (private http: Http) { }

    getAll(){

    }

    getById(){

    }

    updateById(){

    }

    deleteById(){

    }

    create(){

    }

    getUserByNameAndPassword(userLoginAndPassword){
        let headers = new Headers ( {
            'Content-Type' : this.config.ApiContentType,
            'format' : this.config.ApiFormat,
            'URI' : this.config.GetUserURI,
        } );
        let Url = this.config.ApiURL+this.config.GetUserURI;
        let options = new RequestOptions ( { headers : headers } );
        let body = userLoginAndPassword;
        return this.http.post( Url, body, options)
            .toPromise ()
    }



}