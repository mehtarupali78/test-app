import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Headers,Http,RequestOptions} from '@angular/http';
import {AppModule} from './app.module';

@Injectable()
export class ApiserviceService {

  constructor(public http:Http) {
    
   }

   public getData(URL,param){
     let header = new Headers();
     header.append('Content-Type','Application/JSON');
     header.append('Accept','Application/JSON');
     let options = new RequestOptions({headers:header,params:param});

     return this.http.get(URL,options)
     .map(res => res.json()
    );
    

   }

}
