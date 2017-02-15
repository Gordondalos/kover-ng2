import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CONFIG } from './config';
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { commonModelService } from "./commonModel.service";
declare var $ : any;


/**
 * Сервис для обмена данными между компонентами, также в нем определены общедоступные обьекты: Текущий пользовател (user), его язык (lang), общий конфиг (config)
 * @class CommonService
 * @see  app/_src/js/Common/common.service.ts
 * @name CommonService
 *
 */
@Injectable ()
export class CommonService extends commonModelService {


    // событие установки нового Водителя в заказе
    private setThisVoditelZakaz = new Subject<string> ();
    setThisVoditelZakazs$ = this.setThisVoditelZakaz.asObservable ();

    setThisVoditelZakazs ( eventData ) {
        this.setThisVoditelZakaz.next ( eventData );
    }


    // событие установки нового Клиента при селекте по номеру
    private setThisClient = new Subject<string> ();
    setThisUsers$ = this.setThisClient.asObservable ();

    setThisUsers ( eventData ) {
        this.setThisClient.next ( eventData );
    }

    // событие изменения Клиента (Добавился новый телефон или адрес)
    private thisClientChange = new Subject<string> ();
    thisUserChanges$ = this.thisClientChange.asObservable ();

    thisUserChanges ( eventData ) {
        console.log ( 'Клиент изменился' );
        this.thisClientChange.next ( eventData );
    }

    // событие выбора адреса доставки
    private setThisAdress = new Subject<string> ();
    setThisAdresss$ = this.setThisAdress.asObservable ();

    setThisAdresss ( eventData ) {
        this.setThisAdress.next ( eventData );
    }

    // событие выбора телефона с которого звонили
    private setThisPhone = new Subject<string> ();
    setThisPhones$ = this.setThisPhone.asObservable ();

    setThisPhones ( eventData ) {
        this.setThisPhone.next ( eventData );
    }


    saveClient ( client : any, clientId : string ) {
        console.log ( client );
        this.thisUserChanges ( client )
    }


    getVoditelNow () {

        return this.jobDriverNow;

    }

    private organization : any = [];


    getOrganization () {

        let that = this;
        return new Promise ( function ( resolve ) {

            that.getAll ( 'Organization' )
                .then ( data => {
                    let opt = JSON.parse ( data[ '_body' ] )[ 'data' ];
                    let newOpt : any = [];
                    opt.forEach ( function ( item ) {
                        newOpt.push ( {
                            'text' : item[ 'name' ],
                            'value' : item[ 'id' ] + ':::' + item[ 'adress' ] + ', ' + item[ 'phone' ],

                        } );
                    } );
                    that.organization = newOpt;
                    if ( that.organization.length ) {
                        resolve ( that.organization );
                    }
                } );

        } );


    }


    private voditelNow = [
        { 'fio' : 'Василий', 'openZakaz' : '1', 'closeZakaz' : '6' },
        { 'fio' : 'Коля', 'openZakaz' : '2', 'closeZakaz' : '5' },
        { 'fio' : 'Сергей', 'openZakaz' : '3', 'closeZakaz' : '4' },
        { 'fio' : 'Эдик', 'openZakaz' : '4', 'closeZakaz' : '5' },
        { 'fio' : 'Миша', 'openZakaz' : '5', 'closeZakaz' : '5' },
        { 'fio' : 'Анатолий Иванович', 'openZakaz' : '3', 'closeZakaz' : '4' },
        { 'fio' : 'Лев', 'openZakaz' : '7', 'closeZakaz' : '3' },
        { 'fio' : 'Гарик Сукачев', 'openZakaz' : '8', 'closeZakaz' : '1' },
    ];

    /**
     * текущий авторизованный пользователь
     * @memberOf CommonService
     * @property user {Object}
     */
    public user : any;

    public options : any = [
        {
            "value" : "582885c12678edb3015d78bb",
            "text" : "+1 (931) 509-2105"
        },
        {
            "value" : "582885c10f986244134424c9",
            "text" : "+1 (847) 537-2277"
        },
        {
            "value" : "582885c15ccce706dc8b4f67",
            "text" : "+1 (825) 432-2150"
        },
        {
            "value" : "582885c1f9ac62e896b0f3d5",
            "text" : "+1 (991) 542-2709"
        },
        {
            "value" : "582885c1eedc9f2bd8c4daff",
            "text" : "+1 (991) 422-2598"
        },
        {
            "value" : "582885c19850a56c4f74f5c8",
            "text" : "+1 (970) 459-3867"
        },
        {
            "value" : "582885c1961ec69e586d785d",
            "text" : "+1 (985) 415-2469"
        },
        {
            "value" : "582885c1ea443d1824187b28",
            "text" : "+1 (807) 433-2225"
        }
    ];

    getClientById ( id : string ) {

        let that = this;
        return new Promise ( function ( resolve ) {
            that.getById ( 'Customer', id )
                .then ( data => {
                    let opt = JSON.parse ( data[ '_body' ] )[ 'data' ];
                    resolve ( opt );
                    // let client = {
                    //     'id' : '1',
                    //     'fio' : 'Кузнецов Вадим',
                    //     'phones' : [ '055577799932', '02154546565' ],
                    //     'adreses' : [ 'Бишкек ул Красивая 5', 'Улица зеленая 3 кв 5' ]
                    // };
                } );
        } );


    }

    addClient ( fio : string, phone : string, adress : string ) {

        var client = {
            'id' : '1',
            'fio' : fio,
            'phones' : [ phone ],
            'adreses' : [ adress ]
        };

        // работаю тут
        this.addTableRow ( 'CustomerCreate', client )
            .then ( data => {
                let res = JSON.parse(data['_body']);
                debugger
            } );


        this.thisUserChanges ( client );

        console.log ( fio, phone, adress );
    }

    public driver : any = [];

    getAllVoditel () {
        let that = this;
        return new Promise ( function ( resolve ) {

            that.getAll ( 'Voditel' )
                .then ( data => {
                    let opt = JSON.parse ( data[ '_body' ] )[ 'data' ];
                    that.driver = opt;
                    if ( that.driver.length ) {
                        resolve ( that.driver );
                    }
                } );

        } );
    }

    saveJobNow ( data ) {
        let otvet = this.addTableRow ( 'DriverNow', data );

    }

    getClientsPhone () {
        let that = this;
        return new Promise ( function ( resolve ) {
            that.getAll ( 'CustomersPhones' )
                .then ( data => {
                    let opt = JSON.parse ( data[ '_body' ] )[ 'data' ];
                    let newOpt : any = [];
                    opt.forEach ( function ( item ) {
                        newOpt.push ( { 'text' : item[ 'phone' ], 'value' : item[ 'customer' ] } );
                    } );
                    that.options = newOpt;
                    if ( that.options.length ) {
                        resolve ( that.options );
                    }
                } );

        } );

    }

    /**
     * язык текущего пользователя
     * @type {string} lang
     */
    public lang : string; // определен в конфиге

    /**
     * Конфигурационные парамеры - обьект
     */
    public config : any = CONFIG;
    public router : any;

    /**
     * Конструктор сервиса устанавливает из конфига язык взаимодействия с пользователем,
     * а если установлена кука переопределяет ее на язык указанный в куке lang
     * @method constructor
     * @memberOf CommonService
     */
    constructor ( http : Http, router : Router ) {
        super ( http );
        this.router = router;
        // $('body').css({'min-height': window.innerHeight+"px" });
        // $('.login').css({'height': window.innerHeight+"px" });


        this.lang = CONFIG.langDefault;
        var lang = this.getCookie ( 'lang' );
        if ( lang !== undefined ) {
            this.lang = lang;
        }
    }

    /**
     * Метод общего сервиса возвращает текущий язык
     * @memberOf CommonService
     * @method getLang
     * @returns {string} возвращает текущий язык
     */
    getLang () : string {
        return this.lang;
    }

    /**
     * Метод общего сервиса устанавливает в Cookie печеньку языка - lang
     * @param lang {string} lang - принимает язык который будет установлен в Cookie
     * @returns {boolean}
     * @method setLang
     * @memberOf CommonService
     * @example
     * setLang('en');
     */
    setLang ( lang : string ) : boolean {
        this.setCookie ( 'lang', lang, {} );
        return true;
    }

    /**
     * Метод общего сервиса для получения данных конфигурации
     * @returns {any} возвращает обьект конфигураций
     * @method getConfig
     * @memberOf CommonService
     */
    // возвращает конфигурации
    getConfig () : any {
        return CONFIG;
    }

    /**
     * Метод общего сервиса устанавливает обьект пользователя в свой scope, для того чтобы потом раздать если кому нужно
     * @param user {any} user - обьет пользователя с полями содержащими токен (он же кука), имя пользователя, дата рождения и др
     * @returns {boolean} возвращает для удобства
     * @memberOf CommonService
     * @method setUser
     */
    setUser ( user : any ) : boolean {
        this.user = user;
        return true;
    }

    /**
     * Метод общего сервиса возвращает значение заданной по имени печеньки
     * @param name {string} name - имя необходимой печеньки
     * @returns {string} значение получаемое в результате или undefined если не установлено
     * @memberOf CommonService
     * @method getCookie
     */
    getCookie ( name : string ) {
        var matches = document.cookie.match ( new RegExp (
            "(?:^|; )" + name.replace ( /([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1' ) + "=([^;]*)"
        ) );
        return matches ? decodeURIComponent ( matches[ 1 ] ) : undefined;
    }

    /**
     * Метод устанавливающий нужные Cookie
     * @memberOf CommonService
     * @method setCookie
     * @param name {string} name - имя куки
     * @param value {string} value - значение куки
     * @param expires {any} обьект даты до которой будет кука, можно передать false тогда установиться на старндартное время
     */

    setCookie ( name : string, value : string, expires : any ) {
        var date = new Date ( new Date ().getTime () + 60 * 1000 );
        if ( expires ) {
            document.cookie = name + "=" + value + "; path=/; expires=" + expires;
        } else {
            document.cookie = name + "=" + value + "; path=/; expires=" + date.toUTCString ();
        }
    }

    /**
     * Метод удяляет куку по имени
     * @param name {string} name - Имя куки которую нужно удалить
     * @memberOf CommonService
     * @method deleteCookie
     */
    deleteCookie ( name : string ) {
        this.setCookie ( name, "", {
            expires : -1
        } )
    }

    /**
     * Метод общего сервиса для выхода из сессии взнаимодействися с сервером
     * удаляет куку токена
     * @memberOf CommonService
     * @method logout
     */
    logout () {
        this.deleteCookie ( 'token' );
        this.user = undefined;
        this.router.navigate ( [ '/user/login' ] );

    }

    getUser ( userLoginAndPassword ) {
        return this.getUserByNameAndPassword ( userLoginAndPassword );
    }


    jobDriverNow : any;

    getJobNow () {
        return new Promise ( resolve => {
            let param : any = [];
            param.push ( new Date () );
            this.getByParam ( 'VoditelNowByParam', JSON.stringify ( param ) )
                .then ( data => {
                    let dt = JSON.parse ( data[ '_body' ] );
                    this.jobDriverNow = dt[ 'data' ];
                    console.log ( dt );
                    resolve ( dt[ 'data' ] );
                } );
        } );
    }

    addNewOrder ( sendData : { client : any; adressDostavki : string; ringPhone : string; voditel : any; organization : any; description : string } ) {
        this.addTableRow ( 'OrderNew', sendData )
            .then ( data => {
                let order = JSON.parse ( data[ '_body' ] );
                if ( order ) {
                    if ( Object.keys ( order ).length > 0 ) {
                        this.router.navigate ( [ this.config.MainPage ] );
                    }
                }

            } )
    }
}
