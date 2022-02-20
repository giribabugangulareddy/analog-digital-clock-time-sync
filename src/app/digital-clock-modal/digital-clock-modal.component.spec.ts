import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockModalComponent } from './digital-clock-modal.component';

describe('DigitalClockModalComponent', () => {
  let component: DigitalClockModalComponent;
  let fixture: ComponentFixture<DigitalClockModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalClockModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
