import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SecondModule } from './second module/second/second.module';
import { ComponentTwoComponent } from './componentTwo/component-two/component-two.component';
import { ComponentThreeComponent } from './componentThree/component-three/component-three.component';
import { MainComponent } from './main/main.component';
import { MainVComponent } from './main-v/main-v.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
