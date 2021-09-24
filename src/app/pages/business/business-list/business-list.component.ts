import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../service/api.service";

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {
  business: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getBussiness();
  }

  getBussiness() {
    this.apiService.get('empresas').subscribe((response) => {
      console.log('RESP: ', response)
      this.business = response;
    }, error => {
      console.log('ERROR: ',error)
    })
  }

}
