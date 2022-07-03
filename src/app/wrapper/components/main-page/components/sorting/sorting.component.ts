import { Component, OnInit } from '@angular/core';

interface sortingValue {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  sortingValues: sortingValue[] = [
    {value: 'default', viewValue: 'Default'},
    {value: 'price', viewValue: 'Price'},
    {value: 'name', viewValue: 'Name'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
