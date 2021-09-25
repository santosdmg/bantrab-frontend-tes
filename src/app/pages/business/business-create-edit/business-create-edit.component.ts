import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {ApiService} from "../../../service/api.service";
import {Router} from "@angular/router";

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


  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
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
      this.apiService.post('empresas', this.form.value).subscribe((response) => {
        console.log('RESPONSE', response)
        this.router.navigateByUrl('business');
      }, error => {
        console.log('ERROR AL CREAR LA EMPRESA: ', error)
      })
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  goBack() {
    this.router.navigateByUrl('business');
  }

}
