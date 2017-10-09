import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

declare var $: any;

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  public data: any[];

  ngOnInit() {
    this.dataService.getChannelFolders().then(data => {
      console.log(data);
      this.data = data;
      setTimeout(() => {
        $(".for-datatables").dataTable({
          // "columnDefs": [
          //   { "width": "200px", "targets": 7 },
          //   { "width": "200px", "targets": 8 }
          // ]
        });
      }, 1000);
    });
  }

}
