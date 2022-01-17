import { Pipe, PipeTransform } from '@angular/core';
import *as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(data: string):string {
    let dateOut: moment.Moment = moment(data,"YYYY-MM-DD");
    return dateOut.format("DD-MM-YYYY")
  }

}
