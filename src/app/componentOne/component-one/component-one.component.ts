import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';
@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {
  content:Data[]
  title:string=""
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
    this.title="Accounts"
  }
  new(){
    console.log("adding new Account")
    let pop:any = <any> document.getElementById('addingmodal')
    pop.showModal()
  }
}
