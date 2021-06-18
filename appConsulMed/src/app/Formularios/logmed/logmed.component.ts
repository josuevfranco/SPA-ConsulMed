import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logmed',
  templateUrl: './logmed.component.html',
  styleUrls: ['./logmed.component.css']
})
export class LogmedComponent implements OnInit {

  constructor() { }

  usuario : string = "";
  contrasena : string = "";

  ngOnInit(): void {
  }

  verifica(){
    
  }

}
