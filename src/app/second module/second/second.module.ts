import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second.component';
import { ComponentOneComponent } from 'src/app/componentOne/component-one/component-one.component';
import { ComponentTwoComponent } from 'src/app/componentTwo/component-two/component-two.component';
import { ComponentThreeComponent } from 'src/app/componentThree/component-three/component-three.component';

const route:Routes=[
  {path:'name', redirectTo:'/name/second'},
  {path:'second', component:SecondComponent},
    {path:'firstComp', component: ComponentOneComponent, outlet:'tabs'},
    {path:'secondComp', component: ComponentTwoComponent, outlet:'tabs'},
    {path:'thirdComp', component: ComponentThreeComponent, outlet:'tabs'}
]

@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class SecondModule { }
