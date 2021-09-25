import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {ApiService} from "../../../service/api.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-business-create-edit',
  templateUrl: './business-create-edit.component.html',
  styleUrls: ['./business-create-edit.component.scss']
})
export class BusinessCreateEditComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    nombre_comercial: ['', Validators.required],
    razon_social: ['', Validators.required],
    telefono: ['', Validators.required],
    correo: ['', Validators.required, Validators.email],
    nit: ['', Validators.required],
    estado: ['', Validators.required],
    direccion: ['', Validators.required],
  });
  submitted: boolean = false;
  companyId: any = null


  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.companyId = this.activatedRoute.snapshot.params?.id;
    if(this.companyId) {
      this.getCompany(this.companyId);
    }
  }

  ngOnInit(): void {
  }

  getCompany(id: string) {
    this.apiService.get(`empresas/${id}`).subscribe((response) => {

      if(response) {
        this.form.controls['nombre_comercial'].setValue(response.nombre_comercial);
        this.form.controls['razon_social'].setValue(response.razon_social);
        this.form.controls['telefono'].setValue(response.telefono);
        this.form.controls['nit'].setValue(response.nit);
        this.form.controls['estado'].setValue(response.estado);
        this.form.controls['direccion'].setValue(response.direccion);
        this.form.controls['correo'].disable();
        this.form.controls['correo'].setValue(response.correo);
      }
    }, error => {
      console.log('ERROR AL OBTENER LA EMPRESA: ', error)
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  removeFormControlError(ev: any, control: AbstractControl) {
    if (ev.target.value != '' && ev.target.value != null) {
      control.setErrors(null);
    }
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        console.log(control)
        if (control && control instanceof FormControl) {
          control.markAsTouched({onlySelf: true});
          if (control.valid) {
            control.setErrors(null);
          }
        }
      });
      return;
    }else {
      if(this.companyId) {
        this.apiService.put(`empresas/${this.companyId}`, this.form.value).subscribe((response) => {
          console.log('RESPONSE', response)
          this.router.navigateByUrl('business');
        }, error => {
          console.log('ERROR AL CREAR LA EMPRESA: ', error)
        })
      }else {
        this.apiService.post('empresas', this.form.value).subscribe((response) => {
          console.log('RESPONSE', response)
          this.router.navigateByUrl('business');
        }, error => {
          console.log('ERROR AL CREAR LA EMPRESA: ', error)
        })
      }
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  goBack() {
    this.router.navigateByUrl('business');
  }

}
