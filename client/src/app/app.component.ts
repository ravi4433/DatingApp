import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountdownTimerService  } from 'ngx-timer';
import { timerTexts, countDownTimerConfigModel } from 'ngx-timer';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any; // No type sefty with any
  testConfig;
  public down;
  public cdate;

  constructor(
              private downTimerService:CountdownTimerService,
              private accountService: AccountService) {}

  ngOnInit() {
    this.down = this.downTimerService;
    this.testConfig = new countDownTimerConfigModel();
    
    //custom class
    this.testConfig.timerClass  = 'test_Timer_class';
 
    //timer text values  
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = ":"; //default - hh
    this.testConfig.timerTexts.minuteText = ":"; //default - mm
    this.testConfig.timerTexts.secondsText = ":"; //default - ss
    
    this.cdate = new Date();
    //console.log(cdate);
    this.cdate.setMinutes(this.cdate.getMinutes() + 5);
    this.downTimerService.startTimer(this.cdate);
    
    console.log(this.cdate);

    //this.getUser();
    this.setCurrentUser()
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  // getUser(){
  //   this.http.get("https://localhost:5001/api/Users").subscribe(response =>{
  //     this.users = response;
  //   }, error=> {
  //     console.log(error);
  //   });
  // }
}
