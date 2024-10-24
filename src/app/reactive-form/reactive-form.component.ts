import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  constructor(private formBuilder: FormBuilder) {

  }

  //FormGroup e FormControl
  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   cpf: new FormControl(''),
  //   address: new FormGroup(
  //     {
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       zip: new FormControl('')
  //     }
  //   )
  // })

  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }), 
    nicknames: this.formBuilder.array([this.formBuilder.control('')])
  });

  get apelidos() {
    return this.profileForm.get('nicknames') as FormArray
  }

  preencherFormulario() {

    this.profileForm.patchValue({
      name: 'Matheus',
      cpf: '12312312312',
      address: {
        street:'Rua Leonardo Baumgratz',
        city: 'Belo Horizonte',
        state: 'MG',
        zip: '31960470'
      }
    });
  }

  adicionarApelido() {
    this.apelidos.push(this.formBuilder.control(''));
  }

  submitForm() {
    //fica no console do dev tools, com todos os dados do formulário. Muito útil
    console.warn (this.profileForm.value);

  }
}
