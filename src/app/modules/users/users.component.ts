import { Component} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

interface AddressFormGroup {
  address: FormControl<string | null>;
}
interface UserModel {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  city: FormControl<string | null>;
  zip: FormControl<string | null>;
  fullName: FormControl<string | null>;
  birthDate: FormControl<Date | null>;
  regions: FormControl<number | null>;
  addresses: FormArray<FormGroup<AddressFormGroup>>;
}

function nameValidator(control: AbstractControl): ValidationErrors | null {
  const regex = /^[a-zA-Z\s]+$/;
  const valid = regex.test(control.value);
  return valid ? null : { invalidName: true };
}

interface Region {
  id: number;
  name: string;
}

interface City {
  regionId: number;
  name: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  regions: Region[] = [
    { id: 15, name: 'Arica y Parinacota' },
    { id: 1, name: 'Tarapacá' },
    { id: 2, name: 'Antofagasta' },
    { id: 3, name: 'Atacama' },
    { id: 4, name: 'Coquimbo' },
    { id: 5, name: 'Valparaíso' },
    { id: 13, name: 'Metropolitana' },
    { id: 6, name: 'O’Higgins' },
    { id: 7, name: 'Maule' },
    { id: 16, name: 'Ñuble' },
    { id: 8, name: 'Biobío' },
    { id: 9, name: 'Araucanía' },
    { id: 14, name: 'Los Ríos' },
    { id: 10, name: 'Los Lagos' },
    { id: 11, name: 'Aysén' },
    { id: 12, name: 'Magallanes' }
  ];

  /**
   * FormControl
   * Manejar el valor de una propiedad en especifico.
   * Se vinculan directamente con los inputs, selects, textareas del html
   */
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  cityControl = new FormControl('', [Validators.required]);
  fullNameControl = new FormControl('', [Validators.required, nameValidator]);
  zipControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')]);
  birthDateControl = new FormControl<Date | null>(null, [Validators.required]);
  regionControl = new FormControl<number | null>(null, [Validators.required]);

  


  /**
   * FormArray
   * Agrupan FormControl, FormArray y FromGroup
   * A modo de array []
   */


  // FormArray<FormGroup<AddressFormGroup>>
  // Aqui lo que decimos que dentro del FormArray
  // Va a haber FormGroups, que dentro van a tener una prop "address"
  // Que va a ser de tipo FromControl<string | null>
  addresesFormArray = new FormArray<FormGroup<AddressFormGroup>>([
    new FormGroup({
      address: new FormControl('', [Validators.required]),
    }),
  ]);


  /**
   * Los FormGroup agrupar FormControl, FormArray y FromGroup
   * A modo de objeto {}
   *
   * {
   *    email: '',
   *    password: '',
   *    city: '',
   * }
   */
  userModel: FormGroup<UserModel> = new FormGroup({
    fullName: this.fullNameControl,
    birthDate: this.birthDateControl,
    email: this.emailControl,
    password: this.passwordControl,
    city: this.cityControl,
    zip: this.zipControl,
    regions: this.regionControl,
    addresses: this.addresesFormArray,
  });
  

  addAddressControl(): void {
    this.addresesFormArray.push(
      this.fb.group({
        address: ['', [Validators.required]],
      })
    )
  }

  constructor(private fb: FormBuilder) {
    this.userModel = this.fb.group<UserModel>({
      fullName: this.fullNameControl,
      birthDate: this.birthDateControl,
      email: this.emailControl,
      password: this.passwordControl,
      city: this.cityControl,
      zip: this.zipControl,
      regions: this.regionControl,
      addresses: this.addresesFormArray,
    });
  }

  deleteFormGroupFromAddressesFormArray(index: number): void {
    this.addresesFormArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.userModel.valid) {
      console.log('Formulario enviado:', this.userModel.value);
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Formulario enviado exitosamente. Revisa la consola para ver los datos.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#28a745'
      });
    } else {
      // Marcar todos los campos como touched para mostrar los errores
      this.markFormGroupTouched(this.userModel);
      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Por favor completa todos los campos requeridos correctamente.',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#dc3545'
      });
    }
  }

  /**
   * Marca todos los controles del formulario como touched
   * Incluyendo controles anidados en FormArray y FormGroup
   */
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach(arrayControl => {
          if (arrayControl instanceof FormGroup) {
            this.markFormGroupTouched(arrayControl);
          } else {
            arrayControl.markAsTouched();
          }
        });
      }
    });
  }
}
