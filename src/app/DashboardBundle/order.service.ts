import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { CommonService } from "../CommonBundle/common.service";
import { Router } from "@angular/router";

@Injectable ()
export class OrderService extends CommonService {

    http : Http;
    router : Router;

    constructor ( http : Http, router : Router ) {
        super ( http, router );
        this.http = http;
    }

    private orderStatus : any = [
        { 'value' : '0', 'text' : 'Новый' },
        { 'value' : '1', 'text' : 'Принят' },
        { 'value' : '2', 'text' : 'Доставляется' },
        { 'value' : '3', 'text' : 'Завершен' },
    ];

    private orders : any =
        [
            {
                "id" : 0,
                "adress" : "Canterwood, Northern Mariana Islands, 6736",
                "description" : "proident aute labore nisi incididunt ullamco incididunt tempor nisi cupidatat",
                "driver" : {
                    "fio" : "Wilson Becker",
                    "id" : 0,
                    "phone" : "(936) 567-3518"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Cipromox",
                    "adress" : "577 Dare Court, Bartley, Oklahoma, 1327",
                    "phone" : "(809) 433-2498"
                }
            },
            {
                "id" : 1,
                "adress" : "Mappsville, Oregon, 4914",
                "description" : "nisi culpa est sint reprehenderit aute enim amet qui qui",
                "driver" : {
                    "fio" : "Rojas Booker",
                    "id" : 1,
                    "phone" : "(810) 426-3460"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Viagreat",
                    "adress" : "129 Robert Street, Lafferty, South Carolina, 3543",
                    "phone" : "(979) 569-3386"
                }
            },
            {
                "id" : 2,
                "adress" : "Yettem, Illinois, 7578",
                "description" : "sunt consectetur ipsum aliquip nisi incididunt enim esse ea aliqua",
                "driver" : {
                    "fio" : "Oneill Harvey",
                    "id" : 2,
                    "phone" : "(827) 529-2991"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Xoggle",
                    "adress" : "640 Chester Court, Allentown, Alaska, 9119",
                    "phone" : "(813) 498-3184"
                }
            },
            {
                "id" : 3,
                "adress" : "Sattley, Virgin Islands, 2552",
                "description" : "ex qui dolor aliqua consectetur consectetur mollit non veniam proident",
                "driver" : {
                    "fio" : "Beck Daniels",
                    "id" : 3,
                    "phone" : "(986) 480-2650"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Sealoud",
                    "adress" : "616 Java Street, Shawmut, Massachusetts, 8742",
                    "phone" : "(856) 580-3323"
                }
            },
            {
                "id" : 4,
                "adress" : "Manila, Guam, 4165",
                "description" : "irure ex magna nostrud ex aliqua laborum ea nisi excepteur",
                "driver" : {
                    "fio" : "Dianne Wyatt",
                    "id" : 4,
                    "phone" : "(807) 511-2947"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Ezent",
                    "adress" : "584 Forrest Street, Muse, Iowa, 1920",
                    "phone" : "(935) 511-2669"
                }
            },
            {
                "id" : 5,
                "adress" : "Islandia, Connecticut, 9827",
                "description" : "ut aliqua irure dolor anim ex laborum ea consequat quis",
                "driver" : {
                    "fio" : "Lewis Conway",
                    "id" : 5,
                    "phone" : "(951) 427-3469"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Progenex",
                    "adress" : "728 Schenck Avenue, Sparkill, Palau, 2223",
                    "phone" : "(812) 537-3715"
                }
            },
            {
                "id" : 6,
                "adress" : "Fredericktown, Colorado, 6195",
                "description" : "aliquip occaecat minim sit ea enim ad sit nisi veniam",
                "driver" : {
                    "fio" : "Joni Hatfield",
                    "id" : 6,
                    "phone" : "(967) 458-3477"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Ludak",
                    "adress" : "123 Colonial Court, Welch, Alabama, 4346",
                    "phone" : "(924) 512-2644"
                }
            },
            {
                "id" : 7,
                "adress" : "Shaft, Utah, 9545",
                "description" : "elit incididunt do excepteur occaecat esse sunt minim deserunt sit",
                "driver" : {
                    "fio" : "Frank Sargent",
                    "id" : 7,
                    "phone" : "(923) 505-3600"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Exosis",
                    "adress" : "171 Gelston Avenue, Hebron, Michigan, 9944",
                    "phone" : "(985) 481-3822"
                }
            },
            {
                "id" : 8,
                "adress" : "Biddle, Pennsylvania, 501",
                "description" : "ut eu quis excepteur Lorem excepteur cillum dolore dolor tempor",
                "driver" : {
                    "fio" : "Singleton Padilla",
                    "id" : 8,
                    "phone" : "(896) 495-2130"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Earbang",
                    "adress" : "594 Polhemus Place, Witmer, Vermont, 7671",
                    "phone" : "(869) 442-2350"
                }
            },
            {
                "id" : 9,
                "adress" : "Lemoyne, Louisiana, 2864",
                "description" : "velit veniam mollit quis Lorem exercitation dolore consequat pariatur occaecat",
                "driver" : {
                    "fio" : "Barrera Lloyd",
                    "id" : 9,
                    "phone" : "(856) 404-3406"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Enormo",
                    "adress" : "251 Beacon Court, Cornfields, Florida, 7636",
                    "phone" : "(945) 449-3547"
                }
            },
            {
                "id" : 10,
                "adress" : "Boyd, Kansas, 7152",
                "description" : "reprehenderit do eu adipisicing adipisicing aliqua et irure consequat dolore",
                "driver" : {
                    "fio" : "Oneal Jacobson",
                    "id" : 10,
                    "phone" : "(940) 435-2250"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Combot",
                    "adress" : "769 Clarendon Road, Westboro, Texas, 7710",
                    "phone" : "(878) 571-2942"
                }
            },
            {
                "id" : 11,
                "adress" : "Eden, Ohio, 2760",
                "description" : "aliqua commodo nisi sit sunt dolor commodo labore est mollit",
                "driver" : {
                    "fio" : "Yesenia Key",
                    "id" : 11,
                    "phone" : "(957) 593-2058"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Yogasm",
                    "adress" : "735 Irving Street, Thatcher, South Dakota, 515",
                    "phone" : "(930) 502-2081"
                }
            },
            {
                "id" : 12,
                "adress" : "Waikele, Maryland, 2525",
                "description" : "dolor velit exercitation id cupidatat commodo esse ea anim deserunt",
                "driver" : {
                    "fio" : "Alisha Faulkner",
                    "id" : 12,
                    "phone" : "(906) 576-3729"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Infotrips",
                    "adress" : "426 Amersfort Place, Kent, Rhode Island, 9312",
                    "phone" : "(833) 446-2033"
                }
            },
            {
                "id" : 13,
                "adress" : "Wescosville, North Carolina, 5592",
                "description" : "magna ad incididunt aliqua velit enim pariatur qui amet quis",
                "driver" : {
                    "fio" : "Bentley Russell",
                    "id" : 13,
                    "phone" : "(881) 416-2372"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Amtap",
                    "adress" : "746 Richardson Street, Colton, California, 4780",
                    "phone" : "(824) 453-3879"
                }
            },
            {
                "id" : 14,
                "adress" : "Harmon, Nevada, 8777",
                "description" : "do magna irure officia dolor deserunt culpa officia elit consectetur",
                "driver" : {
                    "fio" : "Dionne Sharpe",
                    "id" : 14,
                    "phone" : "(983) 484-2814"
                },
                "status" : {
                    "text" : "Новый",
                    "value" : 1
                },
                "organization" : {
                    "title" : "Zorromop",
                    "adress" : "749 Bushwick Place, Strykersville, Missouri, 2163",
                    "phone" : "(893) 589-2906"
                }
            }
        ];


    getOrderStatus () {
        return this.orderStatus;
    }

    getOrders () {

         this.getByParam ( 'OrdersActive', { 'status' : '1' } )
            .then ( data => {
                let qwe = JSON.parse(data['_body']);
                console.log ( qwe );

            } );

        return this.orders;
    }

    addThisOrder ( order : any ) {
        this.orders.push ( order );
    }

    changeThisOrder ( order : any ) {
        this.orders.forEach ( function ( item, index ) {
            if ( order.id == item.id ) {
                this.orders[ index ] = order;
            }
        } )
    }

}
