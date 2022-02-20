How to use clock?

1. when page was loaded default current time showing on analog and digital clocks
2. if we want change customized time on any clock. Click on anyone of the clock.
3. modal will open and increment or decrement the your time. Click OK button. Selected time will update to both clocks.
4. For reset the time on click one resetTime button. it will set current time.

How to its works:

1.Time observable is keep updating the interval event activities and time$ observable is used to separate the hours, minutes, seconds for rotating the hands in the clock.
2.click on the any clock customized time set to time$ observable. 

included components and Module

1.NgxMaterialTimepickerModule: used for timepicker when click on analog clock.
2.MatDialogModule : used for open the dialog model when click one digital clock.
3.Appcompoent is used to analog and digital clocks operations. 
4.DigitalClockModalComponent : used for load the dialog modal component.



