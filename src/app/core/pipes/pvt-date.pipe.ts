import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
    name: 'pvtDate'
})

export class PvtDatePipe implements PipeTransform {
    transform(value: Date): string {
        moment.locale('pt-br');
        return moment(value).format('LLLL');
    }
}
