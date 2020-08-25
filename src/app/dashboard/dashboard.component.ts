import { Component, OnInit } from '@angular/core';
import { Level, LEVELS } from '../models/level.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  levelsList: Level[];

  constructor() { }

  ngOnInit(): void {
    this.levelsList = LEVELS
  }

}
