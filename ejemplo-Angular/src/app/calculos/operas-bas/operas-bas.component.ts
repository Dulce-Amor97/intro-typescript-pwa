import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas', //nombre del componente
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1: string='';
  num2: string='';
  operacion: string='';

  resultado:number=0;

  constructor() { }

  Sumar(): void {
    switch (this.operacion) {
      case 'Sumar':
        this.resultado=parseInt (this.num1) + parseInt (this.num2);
        break;
        case 'Restar':
        this.resultado=parseInt (this.num1) - parseInt (this.num2);
        break;
        case 'Multiplicar':
        this.resultado=parseInt (this.num1) * parseInt (this.num2);
        break;
        case 'Dividir':
        this.resultado=parseInt (this.num1) / parseInt (this.num2);
        break;
      default:
        break;
    } 
  }
  
  ngOnInit(): void {
    
  }

}
