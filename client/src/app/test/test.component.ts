import { Component, OnInit } from '@angular/core';
import { CountupTimerService, CountdownTimerService  } from 'ngx-timer';
//import { Moment } from 'moment';
import * as moment from 'moment';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //const m = moment();

  constructor(private downTimerService:CountdownTimerService,
              private appComponent:AppComponent) { }

  ngOnInit(): void {

  }

  getTime(timeInSeconds){
    var dateObj = new Date(timeInSeconds * 1000); 
    var hours = dateObj.getUTCHours(); 
    var minutes = dateObj.getUTCMinutes(); 
    var seconds = dateObj.getSeconds(); 
  
    var timeString = hours.toString().padStart(2, '0') 
                + ':' + minutes.toString().padStart(2, '0') 
                + ':' + seconds.toString().padStart(2, '0'); 

    return timeString;
  }

  pauseTimer(){
    this.downTimerService.pauseTimer();

    

    console.log(this.getTime(300-this.downTimerService.totalSeconds));
  }
}
