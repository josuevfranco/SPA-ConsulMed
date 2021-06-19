import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LogAdminComponent } from './components/log-admin/log-admin.component';
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
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
