import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {DataTableModule} from 'angular2-datatable'
import {DataFilterPipe} from '../data-filter-pipe';
import * as _ from 'lodash';
import { HomeComponent } from '../home/home.component';
import {DataService} from '../dataservice';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {
  
  private data:{};
  public filterQuery='';
  public rowsOnPage=10;
  public sortBy ='name';
  public sortOrder = 'asc'; 
  public selectedCountry :object;

  constructor(public router:ActivatedRoute,public dataservice:DataService) {
    
       this.data= this.dataservice.homeComponent;
    console.log("seleted Coutry list" + JSON.stringify(this.selectedCountry));
   }

   public toInt(num:string){
    return +num;
  }
   
  ngOnInit() {

  }

}
