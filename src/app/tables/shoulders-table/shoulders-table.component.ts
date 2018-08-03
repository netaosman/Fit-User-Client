import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  parameter: string;
  result: any;
  symbol: any;
}

var workVsRest = 7.5
7.5/2;
var workTime = workVsRest.toFixed(2);

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, parameter: 'Reps', result: 5, symbol: 'REP' },
  { position: 2, parameter: 'Work/Rest', result: workTime, symbol: 'WR' },
  { position: 3, parameter: 'Technique', result: 5.2, symbol: 'TE' },
  { position: 4, parameter: 'Calories', result: 96, symbol: 'CAL' },
  { position: 5, parameter: 'Velocity', result: 0.76, symbol: 'V' },
  { position: 6, parameter: 'Rhythm', result: 90 + '%', symbol: 'R' },
  
];

@Component({
  selector: 'app-shoulders-table',
  templateUrl: './shoulders-table.component.html',
  styleUrls: ['./shoulders-table.component.css']
})
export class ShouldersTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'parameter', 'result', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
