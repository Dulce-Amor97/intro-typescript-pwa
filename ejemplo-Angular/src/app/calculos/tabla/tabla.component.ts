import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  valor='';
  hasta:number;
  result: number=0;
  resultados: string[] = [] //Array Vacío

  constructor() {}

  Multiplicaciones(){
    let numero: number = parseInt(this.valor);
    let resultados:  string[]=[];

    for (let i = 1; i < this.hasta; i++) {
      this.result = numero * i;
      resultados.push (i+ 'x'+ numero+'='+ this.result);
    }
    this.resultados = resultados;
  }

  ngOnInit(): void {
  }

}
