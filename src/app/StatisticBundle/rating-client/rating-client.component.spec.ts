/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RatingClientComponent } from './rating-client.component';

describe('RatingClientComponent', () => {
  let component: RatingClientComponent;
  let fixture: ComponentFixture<RatingClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
