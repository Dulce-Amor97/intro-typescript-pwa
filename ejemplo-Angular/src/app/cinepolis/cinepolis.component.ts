import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
  export class CinepolisComponent implements OnInit {

  display: string = 'none';
  display1: string = 'none';

  nombre: string = '';
  compra: number = 0;
  tarjeta: number = 0;
  boletos: number = 0;
  resultado: number = 0;

  mensaje: string = '';

  constructor() { }

  compraBoletos(){
    let precio = 12000;
    let boletosPermitidos = (this.compra * 7);
    let total = 0;
    let texto = '';
    
    if(this.boletos <= boletosPermitidos){
      total = this.boletos * 12000;

      if(this.boletos>5){
        total -= (total * 0.15);
      }
      else if (this.boletos>=3){
        total -= (total * 0.10);
      }

      if(this.tarjeta == 1){
        total -= (total * 0.10);
      }

      texto = '';
      this.display = 'block';
    }else{
      texto = '¡Solo se pueden comprar 7 boletos por cliente!';
      this.display='none';
    }

    if(this.boletos == 0 || this.nombre == '' || this.compra == 0 || 
    this.tarjeta == 0 || this.boletos == 0){
      this.display ='none';
      this.display1 = 'block';
      total = 0;
    }else{
      this.display1 = 'none';
    }

    this.mensaje = texto;
    this.resultado = total;

  }



  ngOnInit(): void {
  }

}
