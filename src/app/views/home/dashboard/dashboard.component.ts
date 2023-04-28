import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  search(e): void {
    console.log('okokokok', e)
    this.searchValue = e;
  }

}
