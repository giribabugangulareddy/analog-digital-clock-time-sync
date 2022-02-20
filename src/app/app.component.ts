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


  openAddFileDialog() {
    this.matDialogRef = this.dialog.open(DigitalClockModalComponent, {
      width: '350px',
      data: this.customTime ? this.customTime : new Date()
      
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      console.log("resss", res);
      if (res) {
        this.enableCurrentTimeFlag = false
        this.getDigitalTime = res.hour + ':' + res.minute
        console.log("bootstrapTime time", this.getDigitalTime);
        this.customTime = moment(this.getDigitalTime, 'hh:mm:ss').toDate();
        console.log("bootstrapTime time111", this.customTime);
      }

    });
  }


  resetClock() {
    this.enableCurrentTimeFlag = true;
    this.customTime = new Date();
  }
  selectChanged(value) {
    this.enableCurrentTimeFlag = false
    console.log("value value", value)
    this.analogTime = value
    this.customTime = moment(this.analogTime, 'hh:mm:ss').toDate();
    console.log("this.custtime", this.customTime)
  }
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

  private hours$: Observable<number> =
    this.time$.pipe(
      map((now: Date) => now.getHours())
    );


  private minutes$: Observable<number> = this.time$.pipe(
    map((now: Date) => now.getMinutes())
  );


  private seconds$: Observable<number> = this.time$.pipe(
    map((now: Date) => now.getSeconds())
  );

  get time$() {
    return this.time;
  }

  get hourRotation() {
    return this.hours$.pipe(
      map(hours => hours / 12 * 360)
    );
  }

  get minuteRotation() {
    return this.minutes$.pipe(
      map(minutes => minutes / 60 * 360)
    );
  }

  get secondRotation() {
    return this.seconds$.pipe(
      map(seconds => seconds / 60 * 360)
    );
  }

}
