import { Component } from '@angular/core';
import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { DigitalClockModalComponent } from './digital-clock-modal/digital-clock-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customTime :any;
  analogTime: any;
  timepicker: any;
  getDigitalTime: any
  matDialogRef: MatDialogRef<DigitalClockModalComponent>;
  enableCurrentTimeFlag: Boolean = true;

  constructor(public dialog: MatDialog) { }


  // changeDigitalTime is change the digital time using dailog modal
  changeDigitalTime() {
    this.matDialogRef = this.dialog.open(DigitalClockModalComponent, {
      width: '350px',
      data: this.customTime ? this.customTime : new Date()
      
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.enableCurrentTimeFlag = false
        this.getDigitalTime = res.hour + ':' + res.minute
        this.customTime = moment(this.getDigitalTime, 'hh:mm:ss').toDate();
      }

    });
  }


  // resetClock is reset the time for currrent time.
  resetClock() {
    this.enableCurrentTimeFlag = true;
    this.customTime = new Date();
  }
  // selectedTimeChanged is get the updated analog time and set the date fromat with help of moment() method
  selectedTimeChanged(value) {
    this.enableCurrentTimeFlag = false
    this.analogTime = value
    this.customTime = moment(this.analogTime, 'hh:mm:ss').toDate();
  }
  // time Observable and type is Date, to get the second of time data
  // interval() method repeats a block of code at every given timing event and 1000 = 1second
  private time: Observable<Date> = interval(1000)
    .pipe(
      map(tick => {
        if (this.enableCurrentTimeFlag) {
          return new Date();
        } else {
          return this.customTime;
        }
      }),
      shareReplay(1)
    );

    // hours$ is oberable and type is number, get the hours number from time$ oberver
  private hours$: Observable<number> =
    this.time$.pipe(
      map((now: Date) => now.getHours())
    );

// minutes$ is oberable and type is number, get the minutes number from time$ oberver
  private minutes$: Observable<number> = this.time$.pipe(
    map((now: Date) => now.getMinutes())
  );

// seconds$ is oberable and type is number, get the seconds number from time$ oberver
  private seconds$: Observable<number> = this.time$.pipe(
    map((now: Date) => now.getSeconds())
  );

  // time$ oberable is return the full time like hour,minute,seconds
  get time$() {
    return this.time;
  }

  // hourRotation is clock hour hands to rotate the based on hours
  get hourRotation() {
    return this.hours$.pipe(
      map(hours => hours / 12 * 360)
    );
  }

    // minuteRotation is clock minute hands to rotate the based on minutes
  get minuteRotation() {
    return this.minutes$.pipe(
      map(minutes => minutes / 60 * 360)
    );
  }

   // secondRotation is clock second hands to rotate the based on second
  get secondRotation() {
    return this.seconds$.pipe(
      map(seconds => seconds / 60 * 360)
    );
  }

}
