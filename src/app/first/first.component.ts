import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input() description?:{state: string, description?: string}
  
  constructor() { }

  ngOnInit(): void {
console.log(this.description)
  if(!this.description){
    this.description={
      state:"not set",
      description:"waiting for description"
    }
  }

  
  }

}
