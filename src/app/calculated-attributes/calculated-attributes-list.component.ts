import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

declare var $: any;

@Component({
  selector: 'app-calculated-attributes-list',
  templateUrl: './calculated-attributes-list.component.html',
  styleUrls: ['./calculated-attributes-list.component.scss']
})
export class CalculatedAttributesListComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  public data: any[];

  ngOnInit() {
    this.dataService.getAllAttributes().then(data2 => {
      //      console.log(data2);
      this.data = data2;
      setTimeout(() => {
        $(".for-datatables").dataTable({
          "columnDefs": [
            { "width": "200px", "targets": 7 },
            { "width": "200px", "targets": 8 }
          ]
        });
      }, 1000);
    });
  }

}
