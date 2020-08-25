import { Component, OnInit } from '@angular/core';
import { Tutorial, TUTORIALS_MAP } from '../models/tutorial.models'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  tutorial: Tutorial

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.tutorial = TUTORIALS_MAP[p.name];
    })
  }

}
