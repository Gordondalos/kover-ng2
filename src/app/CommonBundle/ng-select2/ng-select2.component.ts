import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component ( {
    selector : 'ng-select2',
    templateUrl : './ng-select2.component.html',
    styleUrls : [ './ng-select2.component.sass' ]
} )
export class NgSelect2Component implements OnInit {

    @Input ()
    private data: any = [];

    @Output()
    private selected = new EventEmitter();

    private result : any = [];
    private select : any = [];

    private options: any = [];
    private placeholder: string;
    private showOptions : boolean = false;
    private search : string = '';
    private value : string = '';



    constructor () {   }

    clearSearch () {
        this.search = '';
        this.result = [];
    }

    selectThis ( value : string, text : string ) {
        this.result = [];
        this.search = text;
        this.result.push ( { 'text' : text, 'value' : value } );
        this.showOptions = !this.showOptions;

        this.selected.emit(this.result);
    }

    searchOpen () {
        this.search = '';
        this.showOptions = !this.showOptions;
    }

    ngOnInit () {


        if(!this.data.select){
            this.select = {'text':'','value':''};
        }else{
            this.select = this.data.select;
        }

        this.options = this.data.options;

        this.placeholder = this.data.placeholder;
        this.search = this.select.text;
        this.value = this.select.value;

    }

}
