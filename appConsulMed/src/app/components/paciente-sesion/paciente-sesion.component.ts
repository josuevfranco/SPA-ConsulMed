import { Component, OnInit } from '@angular/core';
import { MedicosService, Paciente } from '../../servicios/medicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-sesion',
  templateUrl: './paciente-sesion.component.html',
  styleUrls: ['./paciente-sesion.component.css']
})
export class PacienteSesionComponent implements OnInit {

  usuario : string = "";
  busca : string[];
  final : string = "";
  paciente: string = 'Josue';
  nombre : string = "";

  constructor(private MedicosService:MedicosService, private router: Router) { }

  ngOnInit(): void {
    this.obtener_localstorage()
  }

  obtener_localstorage(){
    this.usuario = localStorage.getItem("medico");
    this.final = this.usuario.slice(1,-1);
    console.log(this.final)
    this.obtenerInfoPaciente();    
    console.log(this.InfoPaciente)
  }

  InfoPaciente: Paciente;

  obtenerInfoPaciente(){
    this.MedicosService.getUnPaciente(this.final).subscribe(
      res => {
        this.InfoPaciente = <any>res;
      },
      err => console.log(err)
    );
  }  

}
