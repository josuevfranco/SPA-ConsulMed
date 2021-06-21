import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MedicosService } from 'src/app/servicios/medicos.service'; 
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logpac',
  templateUrl: './logpac.component.html',
  styleUrls: ['./logpac.component.css']
})
export class LogpacComponent implements OnInit {

  medico = {
    usuario: '',
    contrasena:  ''
  }

  loginForm = this.formBuilder.group({
    usuario: ['', [Validators.required, Validators.minLength(4)]],
    contrasena: ['']
  });

  addFriendToSystem(loginForm){
    let user:string = loginForm.get('usuario').value;
    localStorage.setItem("medico",JSON.stringify(user))
    console.log(user)
  }

  constructor(private formBuilder: FormBuilder, private MedicosService: MedicosService, private router: Router) { }

  ngOnInit(): void {
  }

  /////////////////////////////////////////////////////////////////////////////////////

  verifica() {

    let existe: boolean = true;
    existe = this.verificaDatos();

    if (this.loginForm.valid && existe) {
      this.addFriendToSystem(this.loginForm);
      this.router.navigate(['/pacSes']);
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña Incorrecta',
        text: 'Intenta de nuevo!'
      })
    }
  }

  //Listar a todos los pacientes
  ListarPacientes: any;

  listarPacientes() {
    this.MedicosService.getPacientes().subscribe(
      res => {
        this.ListarPacientes = res;
      },
      err => console.log(err)
    );
  }

  
  //Verifica con los datos ingresados con el registro
  verificaDatos(): boolean {

    this.listarPacientes();

    for (let med in this.ListarPacientes){
      if (med.includes(this.medico.contrasena) && med.includes(this.medico.usuario)){
        return true;
      }
    }
    
    return false;
  }

}
