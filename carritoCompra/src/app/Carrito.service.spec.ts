/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CarritoService } from './Carrito.service';

describe('Service: Carrito', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarritoService]
    });
  });

  it('should ...', inject([CarritoService], (service: CarritoService) => {
    expect(service).toBeTruthy();
  }));
});
