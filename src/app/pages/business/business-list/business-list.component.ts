import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../service/api.service";

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {
  business: any[] = [];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getBusiness();
  }

  getBusiness() {
    this.apiService.get('empresas').subscribe((response) => {
      console.log('RESP: ', response)
      this.business = response;
    }, error => {
      console.log('ERROR: ',error)
    })
  }

  gotToAddBusiness() {
    this.router.navigateByUrl('business/create');
  }

  goToEditBusiness(id: number) {
    this.router.navigateByUrl(`business/${id}/edit`);
  }

}
