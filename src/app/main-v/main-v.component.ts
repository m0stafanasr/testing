import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';
@Component({
  selector: 'app-main-v',
  templateUrl: './main-v.component.html',
  styleUrls: ['./main-v.component.scss']
})
export class MainVComponent implements OnInit {
  @Input() content?:Data[]
  @Input() title:string=""
  mainData?:Data[]=[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.content)

  }

}
