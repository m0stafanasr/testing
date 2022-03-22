import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit {
content:Data[]
title:string="Category"
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
  newCode(){
    console.log("new Code Added")
    
  }
}
