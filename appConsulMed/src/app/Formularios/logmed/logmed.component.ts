import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Medico, MedicosService } from './../../servicios/medicos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logmed',
  templateUrl: './logmed.component.html',
  styleUrls: ['./logmed.component.css']
})
export class LogmedComponent implements OnInit {

  medico = {
    usuario: '',
    contrasena: ''
  }

  medico2: Medico = {
    usrname: this.medico.usuario,
    contrasena: this.medico.contrasena
  }

  loginForm = this.formBuilder.group({
    usuario: ['', [Validators.required, Validators.minLength(4)]],
    contrasena: ['']
  });

  addFriendToSystem(loginForm) {
    let user: string = loginForm.get('usuario').value;
    localStorage.setItem("medico", JSON.stringify(user))
    console.log(user)
  }

  constructor(private formBuilder: FormBuilder, private MedicosService: MedicosService, private router: Router) { }

  ngOnInit(): void {
  }


  verifica() {

    let existe: boolean = true;
    existe = this.verificaDatos();

    if (this.loginForm.valid && existe) {
      this.addFriendToSystem(this.loginForm);
      this.router.navigate(['/home']);
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña Incorrecta',
        text: 'Intenta de nuevo!'
      })
    }
  }

  //Listar a todos los médicos
  ListarMedicos: Medico[];

  listarMedicos() {
    this.MedicosService.getMedicos().subscribe(
      res => {
        this.ListarMedicos = <any>res;
      },
      err => console.log(err)
    );
  }

  //Verifica con los datos ingresados con el registro
  verificaDatos(): boolean {

    this.listarMedicos();
    console.log(this.ListarMedicos);
    
    
    return false;
  }

}

interface Med {
  idMed : string;
  nombre : string;
  apellido : string;
  correo : string;
  especialidad : string;
  usrname : string;
  contrasena : string;
  icono : string;
}
