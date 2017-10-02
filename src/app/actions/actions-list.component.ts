import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  public lastRefresh: Date = null;

  refreshMetadata() {
    return this.http.get('http://www.mysupermarket.co.uk/api/DpnSiteEventRaiseSiteMetadata.aspx').toPromise().then((data:any)=>{
      console.log(data);
      this.lastRefresh = data.data;
    });
  }
}
