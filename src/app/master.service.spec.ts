import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('Master service without angular testing support',()=>{
  let service: MasterService;
  it('#getValue should return real value from real value service', ()=>{
    service = new MasterService(new ValueService());
    expect(service.getvalue()).toBe('real value');
  });
});

describe('MasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterService = TestBed.get(MasterService);
    expect(service).toBeTruthy();
  });
});
