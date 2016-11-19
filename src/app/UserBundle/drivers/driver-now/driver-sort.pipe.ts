import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
    name : 'driverSort'
} )
export class DriverSortPipe implements PipeTransform {

    transform ( voditelNow : any, args? : any ) : any {

        let upOrDown = args[ 0 ];
        let sortColumn = args[ 1 ];
        var sorted = voditelNow.sort ( function ( a, b ) {
            var field = sortColumn;
            var direction = (upOrDown == true) ? -1 : 1;
            return  a[field] > b[field] ? 1 * direction : -1 * direction;
        } );
        return sorted;


    }

}
