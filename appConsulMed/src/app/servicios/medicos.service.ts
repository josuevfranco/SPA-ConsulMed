import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  //Ruta del Api Rest
  url = '/api';

  constructor(private http: HttpClient) { }

  //Get Médicos
  getMedicos(){
    return this.http.get(this.url);
  }

  //Get Pacientes
  getPacientes(){
    return this.http.get(this.url+'/pac');
  }

  //Get Un Paciente 
  getUnPaciente(id:string){
    return this.http.get(this.url+'/paciente/'+id);
  }

  //Agregar un Médico
  addMedico(medico:Medico){
    return this.http.post(this.url, medico);
  }

  //Agregar un Paciente
  addPaciente(paciente:Paciente){
    return this.http.post(this.url+'/paciente/', paciente);
  }

  //Modificar un Paciente 
  editPaciente(id:string, paciente:Paciente){
    return this.http.put(this.url+'/'+id, paciente);
  }

  //Eliminar un Medico
  deleteMedico(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //Eliminar un Paciente
  deletePaciente(id:string)  {
    return this.http.delete(this.url+'/pac/'+id);
  }

  //Verifica Inicio de Sesión
  verificaSesionMed(medico:Medico){
    
  }

}

export interface Paciente {
  idPac?:string;
  nombre?:string;
  apellido?:string;
  correo?:string;
  signos?:string;
  usrname?:string;
  contrasena?:string;
  historial?:string;
  enfermedad?:string;
  edad?:string;
  genero?:string;
  peso?:string;
  nivels?:string;
}

export interface Medico {
  idMec?:string;
  nombre?:string;
  apellido?:string;
  correo?:string;
  especialidad?:string;
  usrname?:string;
  contrasena?:string;
}
