import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()

export class DataService {

  public paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();

  constructor() {
   }

  changeParam(param: any) {
    this.paramSource.next(param)
  }

}
