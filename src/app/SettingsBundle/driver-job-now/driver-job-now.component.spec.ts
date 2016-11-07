/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DriverJobNowComponent } from './driver-job-now.component';

describe('DriverJobNowComponent', () => {
  let component: DriverJobNowComponent;
  let fixture: ComponentFixture<DriverJobNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverJobNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverJobNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
