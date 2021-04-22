import { TestBed } from '@angular/core/testing';

import { CustomService } from './custom.service';

describe('CustomService', () => {
  let service: CustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomService);  //DI
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('variable test', () => {
    expect(service.name).toEqual("Ajay Kumar");
  });
});
