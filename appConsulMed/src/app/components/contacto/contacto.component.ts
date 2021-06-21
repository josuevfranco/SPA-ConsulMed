import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Enviar(){
    Swal.fire(
      'Doctor Code!',
      'Gracias Por Ponerse en Conctacto con Nosotros!',
      'success'
    )
  }

}
