import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  content:Data[]=[]
  passContent:Data[]=[]
  controls:any[]=[]
  constructor() {
    this.controls=[
      {
       accounts:[
       { id:'number',
        label_id:'enter ID',
        name:'text',
        label_name:'insert name: ',
        role:'select',
        roles:[
          'supplier',
          'buyer',
        ],
        label_role:'select Role: ',
        translations:{
          en:{
            enName:'text',
            label_enName:'insert english name: ',
            desc:'text',
            label_enDesc:'insert english description: ',

          }
        }
      }
        ] ,
       category:[
        {
          id:'number',
          label_id:'insert category ID: ',
          img: 'file',
          label_img:'insert category image: ',
          name:'text',
          label_name:'insert category name: ',
          description:'text',
          translations:{
            en:{
              enName:'text',
              label_enName:'insert english name',
              desc:'text'
            }
          }
        }
       ], 
       hsCode:[
        {
          id:'number',
          label_id:'insert ID: ',
          lvl:'number',
          label_lvl:'insert level: ',
          label_code:'insert code: ',
          code:'number',
          translations:{
            end:{
              enName:'text',
              label_enName:'insert english name: ',
              enDesc:'text',
              label_enDesc:'insert english description: ',
            },
            name:'text',
            label_name:'insert name: ',
            desc:'text',
            label_desc:'insert description: '
          }
        }
       ]
      }
    ]
   }

  ngOnInit(): void {

    this.passContent=this.content
    
  }

}
