import Swal from 'sweetalert2';
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

  deleteCompany(id: string){
    Swal.fire({
      title: '¿Quieres eliminar la empresa?',
      text: 'Esta acción es irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.apiService.delete(`empresas/${id}`).subscribe((response) => {
          if(response) {
            Swal.fire(
              'Éxito',
              'La empresa fue eliminada exitosamente.',
              'success'
            )
            this.getBusiness();
          }
        }, error=> {
          if(error) {
            Swal.fire(
              'Error',
              'No fue posible eliminar la empresa.)',
              'error'
            )
          }
        })
      }
    })
  }

}
