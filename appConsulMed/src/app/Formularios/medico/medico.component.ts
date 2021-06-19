import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Medico, MedicosService } from './../../servicios/medicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  medico: Medico = {
    nombre:'',
    apellido:'',
    correo:'',
    especialidad:'',
    usrname:'',
    contrasena:''
  }


  registerForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(4)]],
    profesion: ['', [Validators.required, Validators.minLength(8)]],
    correo: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
    usuario: ['', [Validators.required, Validators.minLength(5)]],
  })


  constructor(private formBuilder: FormBuilder, private MedicosService:MedicosService, private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.registerForm.valid){
      console.log("Válido");
      this.agregar();
    }
    else{
      console.log("Inválido");
    }

  }

  limpiar(){
    this.registerForm.patchValue({
      nombre: '',
      apellidos: '',
      profesion: '',
      correo: '',
      contrasena: '',
      usuario: '',
    })
  }

  //Get
  get nombre(){return this.registerForm.get('nombre')}
  get apellidos(){return this.registerForm.get('apellidos')}
  get profesion(){return this.registerForm.get('profesion')}
  get correo(){return this.registerForm.get('correo')}
  get contrasena(){return this.registerForm.get('contrasena')}
  get usuario(){return this.registerForm.get('usuario')}

  //Agregar
  agregar(){
    this.MedicosService.addMedico(this.medico).subscribe();
    this.router.navigate(['/logmed']);
  }

}
