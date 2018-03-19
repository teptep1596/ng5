import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The Initial goal', 'Another Silly Life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
