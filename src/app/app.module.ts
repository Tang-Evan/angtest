import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyC01Component } from "./myc01.component";
import { MyC02Component } from "./myc02.component";
import { MyC03Component } from "./myc03/myc03.component";
import { MyC04Component } from "./myc04/myc04.component";
import { Myc05Component } from './myc05/myc05.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', redirectTo:'/login'}
]


@NgModule({
  declarations: [   //聲明
    AppComponent,
    MyC01Component,
    MyC02Component,
    MyC03Component,
    MyC04Component,
    Myc05Component,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),  //添加路由配置
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
