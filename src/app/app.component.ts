import { Component } from '@angular/core';
/* import ( DateService ) from './services/date/date.service'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_product';
 /*  myDate: Date;
  constructor(private dateService: DateService){}

  public getDate() {
    this.myDate = this.dateService.getDate().subscribe(
      data=>this.myDate=data
    );
  } */

}
