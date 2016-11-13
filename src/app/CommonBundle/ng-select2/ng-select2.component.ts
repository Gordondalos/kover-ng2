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

    private options: any = [];
    private placeholder: string;
    private showOptions : boolean = false;
    private search : string = '';


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
        this.options = this.data.options;
        this.placeholder = this.data.placeholder;
    }

}
