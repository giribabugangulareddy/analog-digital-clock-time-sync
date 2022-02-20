import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-digital-clock-modal',
  templateUrl: './digital-clock-modal.component.html',
  styleUrls: ['./digital-clock-modal.component.css']
})
export class DigitalClockModalComponent implements OnInit {

  seletedTime = { hour: 13, minute: 30, second: 0 }

  constructor(
    public dialogRef: MatDialogRef<DigitalClockModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.data = moment(this.data, 'hh:mm:ss').toDate()

    this.seletedTime = { hour: this.data.getHours(), minute: this.data.getMinutes(), second: this.data.getSeconds() }
  }

  CloseModal() {
    var data = this.seletedTime
    this.dialogRef.close(data);
  }


}
