import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  parameter: string;
  result: any;
  symbol: any;
}

var workVsRest = 8/2;
var workTime = workVsRest.toFixed(2);

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, parameter: 'Reps', result: 8, symbol: 'REP' },
  { position: 2, parameter: 'Work/Rest', result: workTime, symbol: 'WR' },
  { position: 3, parameter: 'Technique', result: 6.9, symbol: 'TE' },
  { position: 4, parameter: 'Calories', result: 89, symbol: 'CAL' },
  { position: 5, parameter: 'Velocity', result: 0.48, symbol: 'V' },
  { position: 6, parameter: 'Rhythm', result: 85 + '%', symbol: 'R' },
  
];


@Component({
  selector: 'app-lunge-table',
  templateUrl: './lunge-table.component.html',
  styleUrls: ['./lunge-table.component.css']
})
export class LungeTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'parameter', 'result', 'symbol'];
  dataSource = ELEMENT_DATA;

  // constructor() { }

  ngOnInit() {
  }

}
