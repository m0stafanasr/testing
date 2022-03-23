import { Component, OnInit, TemplateRef } from '@angular/core';
import { Data } from 'src/app/data';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from 'src/app/popup/popup.component';
import { Accounts } from 'src/app/view-models/accounts';
import { AccountsService } from 'src/app/services/accounts.service';
@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {
  content:Data[]
  title:string=""
  modalRef:BsModalRef
  modalopt:NgbModalOptions
  constructor(private modalServ: NgbModal, private accServ:AccountsService) { this.content=[
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
    this.title="Accounts";
    this.accServ.getAccounts().subscribe(e=>{
      console.log(e)
    })
  }
  new(){
    console.log("adding new Account")
    //let pop:any = <any> document.getElementById('addingmodal')
     this.modalServ.open(PopupComponent, {centered:true})
  }

}
