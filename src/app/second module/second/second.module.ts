import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second.component';
import { ComponentOneComponent } from 'src/app/componentOne/component-one/component-one.component';
import { ComponentTwoComponent } from 'src/app/componentTwo/component-two/component-two.component';
import { ComponentThreeComponent } from 'src/app/componentThree/component-three/component-three.component';
import { MainVComponent } from 'src/app/main-v/main-v.component';
import { PopupComponent } from 'src/app/popup/popup.component';
import {BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountsService } from 'src/app/services/accounts.service';
import { HttpClientModule } from '@angular/common/http';
const route:Routes=[
  {path:'', component:SecondComponent, children:[
    {path:'firstComp', component: ComponentOneComponent, outlet:'tabs'},
    {path:'secondComp', component: ComponentTwoComponent, outlet:'tabs'},
    {path:'thirdComp', component: ComponentThreeComponent, outlet:'tabs'}
  ]},

  {path:'**', redirectTo:'/name'},
]

@NgModule({
  declarations: [SecondComponent,
    MainVComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentOneComponent,
    PopupComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ModalModule,
    NgbModule,
    HttpClientModule
  ], providers:[
    BsModalService,
    AccountsService
  ], entryComponents:[
    PopupComponent
  ]
})
export class SecondModule { }
