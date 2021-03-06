import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { LogAdminComponent } from './components/log-admin/log-admin.component';
import { PacienteSesionComponent } from './components/paciente-sesion/paciente-sesion.component';
import { RegistroPacienteComponent } from './Enfermera/registro-paciente/registro-paciente.component';
import { LogmedComponent } from './Formularios/logmed/logmed.component';
import { LogpacComponent } from './Formularios/logpac/logpac.component';
import { MedicoComponent } from './Formularios/medico/medico.component';
import { PacienteComponent } from './Formularios/paciente/paciente.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'logAdmin', component: LogAdminComponent },
  { path: 'logpac', component: LogpacComponent },
  { path: 'logmed', component: LogmedComponent },
  { path: 'regmed', component: MedicoComponent},
  { path: 'regpac', component: PacienteComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pacSes', component: PacienteSesionComponent },
  { path: 'enfermera', component: RegistroPacienteComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
