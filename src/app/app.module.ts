import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route,RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule,XHRConnection,URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ConstantService} from './constant.service';
import {ApiserviceService} from './apiservice.service';
import {DataTableModule} from 'angular2-datatable'
import {DataFilterPipe} from './data-filter-pipe';
import { DisplayInfoComponent } from './display-info/display-info.component';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {DataService} from './dataservice';

const appRoutes:Routes =[
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'display',component:DisplayInfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataFilterPipe,
    DisplayInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ConstantService,
    ApiserviceService,
    DataService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
