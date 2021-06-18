import { Component, OnInit } from '@angular/core';
import { MedicosService, Medico, Paciente } from '../../servicios/medicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private MedicosService:MedicosService) { }
  ngOnInit(): void {
    this.listarMedicos();
    this.listarPacientes();
  }

  ListarMedicos : Medico[];
  ListarPacientes : Paciente[];

  listarMedicos(){
    this.MedicosService.getMedicos().subscribe(
      res=>{
        this.ListarMedicos =<any>res;
      },
      err => console.log(err)
    );
  }

  listarPacientes(){
    this.MedicosService.getPacientes().subscribe(
      res=>{
        this.ListarPacientes =<any>res;
      },
      err => console.log(err)
    );
  }

  eliminarMedico(id:string){
    this.MedicosService.deleteMedico(id).subscribe(
        res=>{
          console.log('Medico eliminado');
          Swal.fire(
            'Médico dado de baja!',
            'Éxito! Actualice la Página para ver cambios',
            'success'
          )
        },
        err=> console.log(err)
    );
  }

  eliminarPaciente(id:string){
    this.MedicosService.deletePaciente(id).subscribe(
        res=>{
          console.log('Paciente eliminado');
          Swal.fire(
            'Paciente dado de baja!',
            'Éxito! Actualice la Página para ver cambios',
            'success'
          )
          
        },
        err=> console.log(err)
    );


  }

}
