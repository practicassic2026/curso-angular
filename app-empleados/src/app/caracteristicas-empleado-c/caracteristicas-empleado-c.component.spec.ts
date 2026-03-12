/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c.component';

describe('CaracteristicasEmpleadoCComponent', () => {
  let component: CaracteristicasEmpleadoCComponent;
  let fixture: ComponentFixture<CaracteristicasEmpleadoCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracteristicasEmpleadoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasEmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
