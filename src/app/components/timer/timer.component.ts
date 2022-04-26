import { CounterService } from './../../services/counter.service';
import { Component, Injectable, OnDestroy, OnInit, Pipe, PipeTransform } from '@angular/core';
import { interval, Subscription, takeUntil, timer } from 'rxjs';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  countDown: Subscription | undefined;
  counter = 1800;
  intervalDuration = 1000;

  stateTimer: 'start' | 'pause';

  constructor(private service: CounterService) {
    this.stateTimer = 'pause';
  }

  ngOnDestroy() {
    this.countDown = undefined;
  }

  ngOnInit(): void {
  }

  startTimer(): void {
    this.stateTimer = 'start';
    this.countDown = this.service
    .getCounter(this.intervalDuration)
    .subscribe(() => this.counter--);
  }

  pauseTimer(): void {
    this.stateTimer = 'pause';
    this.countDown?.unsubscribe();
    //this.counter = 1800;
  }

  resetTimer(): void {
    this.stateTimer = 'pause';
    this.countDown?.unsubscribe();
    this.counter = 1800;
  }

}
