import { Component, OnInit } from '@angular/core';
import { SolutionService } from './services/solution.service';
import { Solution } from './models/solution';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  data: Solution = {
    title: '',
    description: '',
    detail: ''
  };

  constructor( private solution: SolutionService) {
  }

  ngOnInit() {
    this.solution.getSolution().subscribe(res => this.data = res);

  }


}
