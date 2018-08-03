import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

export interface PeriodicElement {
  position: number;
  parameter: string;
  result: any;
  symbol: any;
}

var workVsRest = 7 / 3;
var workTime = workVsRest.toFixed(2);

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, parameter: 'Reps', result: 5, symbol: 'REP' },
  { position: 2, parameter: 'Work/Rest', result: workTime, symbol: 'WR' },
  { position: 3, parameter: 'Technique', result: 6.2, symbol: 'TE' },
  { position: 4, parameter: 'Calories', result: 78, symbol: 'CAL' },
  { position: 5, parameter: 'Velocity', result: 0.48, symbol: 'V' },
  { position: 6, parameter: 'Rhythm', result: 75 + '%', symbol: 'R' },

];

@Component({
  selector: 'app-chest-table',
  templateUrl: './chest-table.component.html',
  styleUrls: ['./chest-table.component.css']
})
export class ChestTableComponent implements OnInit {

  barChart: any;


  displayedColumns: string[] = ['position', 'parameter', 'result', 'symbol'];
  dataSource = ELEMENT_DATA;

  // constructor() { }

  ngOnInit() {

    this.barChart = new Chart('barChart', {
      // The type of chart we want to create
      type: 'bar',
  
      // The data for our dataset
      data: {
          labels: ["1", "2", "3", "4", "5"],
          datasets: [{
              // label: "My First dataset",
              backgroundColor: [
                '#2b3d52',
                '#2b3d52',
                '#2b3d52',
                '#2b3d52',
                '#2b3d52'

              ],
              data: [4, 9, 5, 7, 6],
          }]
      },
  
      // Configuration options go here
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: true,
            },
            ticks: {
              display: true
            }
          }],
          yAxes: [{
            display: true,
            gridLines: {
              display: true
            },
            ticks: {
              display: true,
              beginAtZero: true
            }
          }],
        }

      }
  });   

}
}
