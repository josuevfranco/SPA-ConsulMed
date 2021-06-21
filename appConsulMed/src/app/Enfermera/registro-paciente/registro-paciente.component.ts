import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MedicosService, Medico, Paciente } from '../../servicios/medicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-paciente-enfermera',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent implements OnInit {

registerForm= this.FormBuilder.group({
  malestar: ['', Validators.required],
  peso: ['', Validators.required],
  talla: ['', Validators.required],
  temp: ['', Validators.required],
  presionA: ['', Validators.required],
  pulsoC: ['', Validators.required]
})

  constructor( private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.registerForm.valid){
      console.log("Válido");
      console.log(this.registerForm.value);
    }
  }

  get malestar(){return this.registerForm.get('malestar').value}
  get peso(){return this.registerForm.get('peso').value;}
  get talla(){return this.registerForm.get('talla').value}
  get temp(){return this.registerForm.get('temp').value}
  get presionA(){return this.registerForm.get('presionA').value}
  get pulsoC(){return this.registerForm.get('pulsoC').value}
}
