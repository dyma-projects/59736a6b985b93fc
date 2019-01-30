import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable()
export class UserService {

    public users: BehaviorSubject<string[]> = new BehaviorSubject([]);
  
    constructor() { }
  
    addUser(name: string) : void {
      let push = this.users.getValue();
      push.push(name);
      this.users.next(push);
    }
}