/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LibsComponent } from './libs.component';

describe('LibsComponent', () => {
  let component: LibsComponent;
  let fixture: ComponentFixture<LibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});