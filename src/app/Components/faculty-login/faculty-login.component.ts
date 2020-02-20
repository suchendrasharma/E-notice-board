import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Date: number;
  Notice: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Date: 1, Notice: 'Hydrogen'},
  {Date: 2, Notice: 'Helium' },
  {Date: 3, Notice: 'Lithium'},
  {Date: 4, Notice: 'Beryllium'},
  {Date: 5, Notice: 'Boron'},
  {Date: 6, Notice: 'Carbon'},
  {Date: 7, Notice: 'Nitrogen'},
  {Date: 8, Notice: 'Oxygen'},
  {Date: 9, Notice: 'Fluorine'},
  {Date: 10, Notice: 'Neon'},
];

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent implements OnInit {
  displayedColumns: string[] = ['Date', 'Notice'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }
}
