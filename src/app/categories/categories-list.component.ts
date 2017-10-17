import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { TreeModule } from 'angular-tree-component';

declare var $: any;

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  public data: any[];

  public options = {

  }

  public nodes = null;
  public products = null;
  public initComplete:boolean = false;
  
  ngOnInit() {
    this.dataService.getChannelFolders().then(data => {
      //console.log(data);
      this.nodes = [data.root];
    });
  }

  public activateFolder($event) {
    let self = this;
    this.dataService.getChannelFolderProducts($event.node.data.id).then(data => {
      console.log('Products: ' + JSON.stringify(data));
      this.products = data;
      $(".for-datatables").DataTable().destroy();
      setTimeout(() => {
        $(".for-datatables").DataTable({
          "initComplete": function(settings, json) {
            self.initComplete = true;
          }
        });
      }, 2000);
    }, error=>console.log("Error: " + JSON.stringify(error)));
  }

}
