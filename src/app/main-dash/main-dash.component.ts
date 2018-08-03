import { Component, OnInit } from '@angular/core';
// import * as Chart from 'angular-chart.js';
import { Chart } from 'chart.js';
// import { Chart, ChartData, Point } from "chart.js";

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  doughnutChart: any;

  // constructor() { }

  ngOnInit() {


    this.doughnutChart = new Chart('doughnut', {
      type: 'pie',
      data: {
        labels: ["Rest-time: 43%", "Legs: 17%",
         "Shoulders: 20%", "Chest: 20%"],
        datasets: [{
          label: '# of Votes',
          data: [43, 17, 20, 20],
          backgroundColor: [
            '#161930',
            '#F44336',
            '#FF9800',
            '#FF5722',

          ],
          borderColor: [

          ],
          // borderWidth: 1
        }]
      },
      options: {
        cutoutPercentage: 70,
        legend: {
          display: true,
          position: 'right',
          labels: {
            padding: 16,
            fontSize: 18
          }
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            display: false,
            gridLines: {
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        }
      }
    })

  }
}
