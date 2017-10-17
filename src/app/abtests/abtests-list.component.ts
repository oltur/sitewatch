import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

declare var $: any;

@Component({
  selector: 'app-abtests-list',
  templateUrl: './abtests-list.component.html',
  styleUrls: ['./abtests-list.component.css']
})
export class ABTestsListComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  public data: any[];
  public initComplete:boolean = false;

  ngOnInit() {
    let self = this;
    this.dataService.getAllABTests().then(data2 => {
//      console.log(data2);
      this.data = data2;
      setTimeout(() => {
        $(".for-datatables").DataTable({
          "destroy": true,
          "initComplete": function(settings, json) {
            self.initComplete = true;
          }
        });
      }, 2000);
    });
  }

}
