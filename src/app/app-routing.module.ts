import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'name',loadChildren:()=>import('src/app/second module/second/second.module').then(x=>x.SecondModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
