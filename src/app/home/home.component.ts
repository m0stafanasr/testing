import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
desc?:any={
  state:"input to output", description:"this is passed description"
}
sec_desc?:any={
  state:"second input",
}
state?:string

  constructor() { }

  ngOnInit(): void {

  }

}
