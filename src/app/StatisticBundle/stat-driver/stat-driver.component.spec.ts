/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatDriverComponent } from './stat-driver.component';

describe('StatDriverComponent', () => {
  let component: StatDriverComponent;
  let fixture: ComponentFixture<StatDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
