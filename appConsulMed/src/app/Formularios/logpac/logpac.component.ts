import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-logpac',
  templateUrl: './logpac.component.html',
  styleUrls: ['./logpac.component.css']
})
export class LogpacComponent implements OnInit {

  medicoOnline = [];

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  verifica(){
    if(this.loginForm.valid){
    this.addFriendToSystem(this.loginForm);
    }
    else{
      console.log("Inválido")
    }
  }

}
