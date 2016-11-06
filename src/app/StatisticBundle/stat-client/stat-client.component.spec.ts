/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatClientComponent } from './stat-client.component';

describe('StatClientComponent', () => {
  let component: StatClientComponent;
  let fixture: ComponentFixture<StatClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
