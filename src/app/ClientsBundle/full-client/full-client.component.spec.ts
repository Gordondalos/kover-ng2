/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FullClientComponent } from './full-client.component';

describe('FullClientComponent', () => {
  let component: FullClientComponent;
  let fixture: ComponentFixture<FullClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
