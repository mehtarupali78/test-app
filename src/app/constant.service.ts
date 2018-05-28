import { Injectable } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConstantService {

  constructor(public http:Http) { }
  BASE_URL= "https://web-travel-test.cc.uic.edu";
}
