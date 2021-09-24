import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

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


  constructor(private formBuilder: FormBuilder) {
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
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

}
