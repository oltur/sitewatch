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
        $(".for-bonsai").shieldTreeView({
          events: {
            select: function (e) {
              const folderId = e.element.find(".node-text").first().attr("id").substring(1);
              console.log("selecting folder " + folderId);
            }
          }
        })
      }, 1000);
    });
  }


}
