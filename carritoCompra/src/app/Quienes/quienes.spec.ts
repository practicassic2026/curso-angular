import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quienes } from './quienes';

describe('Quienes', () => {
  let component: Quienes;
  let fixture: ComponentFixture<Quienes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quienes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quienes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
