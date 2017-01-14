import { Injectable } from '@angular/core';
import {CONFIG} from './config';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable ()
export class commonModelService {

    config = CONFIG;

    constructor (private http: Http) { }

    getAll(model){

        let headers = new Headers ( {
            'Content-Type' : this.config.ApiContentType,
            'format' : this.config.ApiFormat,
            'URI' : this.config.model[model].url,
        } );
        let Url = this.config.ApiURL+this.config.model[model].url;
        let options = new RequestOptions ( { headers : headers } );
        let body = [];
        return this.http.post( Url, body, options)
            .toPromise ()
    }

    getById(model,id){

        let headers = new Headers ( {
            'Content-Type' : this.config.ApiContentType,
            'format' : this.config.ApiFormat,
            'URI' : this.config.model[model].url,
        } );
        let Url = this.config.ApiURL+this.config.model[model].url+"/"+id;
        let options = new RequestOptions ( { headers : headers } );
        let body = [];
        return this.http.post( Url, body, options)
            .toPromise ()

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