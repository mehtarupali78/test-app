import { Component, OnInit, EventEmitter, Output,OnDestroy} from '@angular/core';
// import {URLSearchParams,Http,HttpModule} from '@angular/http';
import {ConstantService} from '../constant.service'; 
import { ApiserviceService } from '../apiservice.service';
import {DataTableModule} from 'angular2-datatable'
import {DataFilterPipe} from '../data-filter-pipe';
import * as _ from 'lodash';
import { Router, NavigationExtras } from '@angular/router';
import {DataService} from '../dataservice';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  private data;
  public filterQuery='';
  public rowsOnPage=10;
  public sortBy ='name';
  public sortOrder = 'asc'; 
  public selecteCountry=[];
  public select:any;
 
  constructor(public constant:ConstantService,public apiservice:ApiserviceService,
    public router:Router,public dataservice:DataService) { 
   
    var URL = this.constant.BASE_URL+'/countries';
    var params = new URLSearchParams();
    let countryResponse = this.apiservice.getData(URL,params);
    countryResponse.subscribe((data)=>{
        setTimeout(()=> {
            this.data = data;
        }, 1000);
      console.log("Country response "+JSON.stringify(data));
    },err =>{
      console.log("Erros in respons");
    })

  }
ngOnDestroy(){
 
  this.select=this.selecteCountry    //for Send Selected value to another component/displayComponet
  this.dataservice.homeComponent=this.select;
}
  addcoutry1(e,level){
    if(e.target.checked){
      if(level.threatLevel===3 || level.threatLevel===4){
        alert("Cannot select this country because "+level.threatText);
        e.target.checked=false;
      }
      else{
        var inserted={
          id:level.id,
          name:level.name,
          threatLevel:level.threatLevel,
          threatText:level.threatText
        }
        this.selecteCountry.push(inserted);      //To Add value into array
        console.log("check box is check and level"+JSON.stringify(this.selecteCountry));
        
      }
      
    }
    else{
      for(var i=0;i<this.selecteCountry.length;i++){
        if(this.selecteCountry[i].id===level.id){
          console.log("check box is not checked index"+ i + "json value"+JSON.stringify(this.selecteCountry));
          this.selecteCountry.splice(i,1);      //To Remove value from array
        }
      }
      console.log("check box is not checked"+JSON.stringify(this.selecteCountry));
    }
  }

  selectedlist(){
    this.router.navigate(['/display']);   //navigate page
  }
public toInt(num:string){
  return +num;
}

  ngOnInit() {
  }

}
