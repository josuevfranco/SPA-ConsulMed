import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Paciente, MedicosService } from './../../servicios/medicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  paciente:Paciente = {
    nombre:'',
    apellido:'',
    correo:'',
    usrname:'',
    contrasena:'',
    edad:'',
    genero:''
  };

  createFormGroup(){
    return new FormGroup({
    nombre: new FormControl ('', [Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl ('', [Validators.required, Validators.minLength(4)]),
    correo: new FormControl ('', [Validators.required,Validators.pattern(this.emailPattern)]),
    contrasena: new FormControl ('',[Validators.required,Validators.minLength(6)]),
    usuario: new FormControl ('',[Validators.required,Validators.minLength(6)]),
    edad: new FormControl ('',[Validators.required]),
    sexo: new FormControl ('',[Validators.required, Validators.minLength(8)])
    });
  }

  constructor(private formBuilder: FormBuilder, private MedicosService:MedicosService, private router:Router) {
    this.registerForm = this.createFormGroup();
   }

  registerForm: FormGroup;
  ngOnInit(): void {

  }

  submit(){
    if(this.registerForm.valid){
      console.log("Válido");
      this.agregarPaciente();
    }
    else{
      console.log("Inválido");
    }
  }

  limpiar(){
    this.registerForm.patchValue({
      nombre: '',
      apellidos: '',
      correo: '',
      contrasena: '',
      usuario: '',
      edad: '',
      sexo: ''
    })
  }

  //Get
  get nombre(){return this.registerForm.get('nombre')}
  get apellidos(){return this.registerForm.get('apellidos')}
  get correo(){return this.registerForm.get('correo')}
  get contrasena(){return this.registerForm.get('contrasena')}
  get usuario(){return this.registerForm.get('usuario')}
  get edad(){return this.registerForm.get('edad')}
  get sexo(){return this.registerForm.get('sexo')}

  //Agregar
  agregarPaciente(){
    this.MedicosService.addPaciente(this.paciente).subscribe();
    this.router.navigate(['/home']);
  }
}
