import { Injectable } from '@angular/core';
import { ValueService } from './value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private valueService: ValueService) { }

  getvalue(){
    return this.valueService.getValue();
  }
}
