import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {

  options: string[] = [
    'Pomodoro',
    'Short Break',
    'Long Break'
  ];

  optionSelected: string = 'Pomodoro';

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(option: string): void {
    this.optionSelected = option;
  }

}
