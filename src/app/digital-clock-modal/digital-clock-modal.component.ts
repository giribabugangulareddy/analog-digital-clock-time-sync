import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-digital-clock-modal',
  templateUrl: './digital-clock-modal.component.html',
  styleUrls: ['./digital-clock-modal.component.css']
})
export class DigitalClockModalComponent implements OnInit {

  
  seletedTime:any;

  constructor(
    public dialogRef: MatDialogRef<DigitalClockModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    // get the last updated time from digital clock
    this.data = moment(this.data, 'hh:mm:ss').toDate()

    // set time to modal time
    this.seletedTime = { hour: this.data.getHours(), minute: this.data.getMinutes(), second: this.data.getSeconds() }
  }

  // get the updated time from the modal and send to digital clock
  CloseModal() {
    var data = this.seletedTime
    this.dialogRef.close(data);
  }


}
