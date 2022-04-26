import { Injectable } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  getCounter(intervalDuration: number) {
    return timer(0, intervalDuration);
  }

}
