import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {
  content:Data[]
  constructor() { this.content=[
      
        {
            "id": 805,
            "level": 3,
            "code": 33,
            "translations": {
                "en": {
                    "name": "Prod101",
                    "description": "Prod101"
                }
            },
            "name": "Prod101",
            "description": "Prod101"
        }
    ]
     }


  ngOnInit(): void {
  }
  newCat(){
    console.log("new category was added")
  }
}
