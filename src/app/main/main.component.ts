import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() content?:Data
  
  // @input() 
  // @input()
  constructor() { }

  ngOnInit(): void {
  }

}
