import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-admin',
  templateUrl: './log-admin.component.html',
  styleUrls: ['./log-admin.component.css']
})
export class LogAdminComponent implements OnInit {

  usuario : string = "";
  contrasena : string = "";

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  verifica(){
    console.log(this.usuario);
    console.log(this.contrasena);
    if (this.usuario == "admin" && this.contrasena == "admin"){
      this.router.navigate(["/admin"]);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Contraseña Incorrecta',
        text: '¡Intenta de nuevo!'
      })
    }

  }

}
