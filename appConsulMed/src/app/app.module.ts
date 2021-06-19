import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { LogAdminComponent } from './components/log-admin/log-admin.component';
import { LogmedComponent } from './Formularios/logmed/logmed.component';
import { MedicoComponent } from './Formularios/medico/medico.component';
import { PacienteComponent } from './Formularios/paciente/paciente.component';
import { LogpacComponent } from './Formularios/logpac/logpac.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    ModificarComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    LogAdminComponent,
    LogmedComponent,
    MedicoComponent,
    PacienteComponent,
    LogpacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
