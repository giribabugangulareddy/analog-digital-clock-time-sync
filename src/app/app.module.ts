import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DigitalClockModalComponent } from './digital-clock-modal/digital-clock-modal.component'; 
import { MatDialogModule } from "@angular/material/dialog";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  entryComponents:[DigitalClockModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
