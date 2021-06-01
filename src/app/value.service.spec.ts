import { TestBed } from '@angular/core/testing';
import { doesNotThrow } from 'assert';

import { ValueService } from './value.service';


// Straight Jasmine testing without Angular's testing support
describe('ValueService, Jasmine testing without angular testing support',()=>{
  let service: ValueService;
  beforeEach(()=>{
    service = new ValueService();
  });

  it('#getValue should return real value',()=>{
    expect(service.getValue()).toBe('real value');
  });

  it('#setvalue should set specified value',()=>{
    service.setValue('dummy value');
    expect(service.value).toBe('dummy value');
  });

  it('#getObservableValue should return value from observable',(done: DoneFn)=>{
    service.getObservableValue().subscribe(value=>{
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise', (done: DoneFn)=>{
    service.getPromiseValue().then(value=>{
      expect(value).toBe('promise value');
      done();
    })
  });

});

describe('ValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValueService = TestBed.get(ValueService);
    expect(service).toBeTruthy();
  });
});
