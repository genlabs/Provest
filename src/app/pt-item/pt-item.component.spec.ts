/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PtItemComponent } from './pt-item.component';

describe('PtItemComponent', () => {
  let component: PtItemComponent;
  let fixture: ComponentFixture<PtItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
