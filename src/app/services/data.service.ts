import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllABTests() {
    return this.http.get('http://www.mysupermarket.co.uk/api/ABTests.aspx').toPromise().then((data: any) => {
//      console.log(data);
      return data.data;
    });
  }

  public getAllAttributes() {
    return this.http.get('http://www.mysupermarket.co.uk/api/CalcAttribute.aspx').toPromise().then((data: any) => {
//      console.log(data);
      return data.data;
    });
  }

}

