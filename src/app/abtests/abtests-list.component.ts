import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-abtests-list',
  templateUrl: './abtests-list.component.html',
  styleUrls: ['./abtests-list.component.css']
})
export class ABTestsListComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  private data: any[];

  ngOnInit() {
    this.dataService.getAllABTests().then(data2 => {
      console.log(data2);
      this.data = data2;
    });
  }

}
