import { Component } from '@angular/core';

@Component({
  selector: 'mat-dash',
  templateUrl: './mat-dash.component.html',
  styleUrls: ['./mat-dash.component.css']
})
export class MatDashComponent {
  headerCards = [
    { title: 'Calories', content: '78', cols: 2, rows: 1 },
    { title: 'Heart Rate', content: '', cols: 2, rows: 1 },
    { title: 'Technique', content: '7.8', cols: 2, rows: 1 },
  ];
}
