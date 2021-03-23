import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.css']
})
export class ElectionListComponent implements OnInit {
  isLoading = true;
  isViewMode = true;
  constructor() { }
  electionList = {
    name: "Election Date"
  }
  ngOnInit(): void {
  }

}
