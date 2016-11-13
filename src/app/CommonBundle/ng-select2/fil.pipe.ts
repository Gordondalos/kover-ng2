import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
    name : 'ng2Filter'
} )
export class FilPipe implements PipeTransform {

    transform ( options : any, search? : string ) : any {

        if ( search === undefined )return options;

        return options.filter(function(item){
            return item.text.toLowerCase().includes(search.toLowerCase());
        });


    }

}
