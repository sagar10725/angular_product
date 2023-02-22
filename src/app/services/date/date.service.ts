import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private datePipe: DatePipe) { }

  public getDate() {
    return this.datePipe.transform(new Date(), 'MM-dd-yyyy');
  }
}
