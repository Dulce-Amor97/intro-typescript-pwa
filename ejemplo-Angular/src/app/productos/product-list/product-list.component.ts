import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imagenWidth: number = 50;
  imagenMargin: number = 2;
  muestraImg:boolean=true;
  listFilter:string='';

  productos:IProducto[]=[
    {
      "productoId":1,
      "modelo": 'Sentra',
      "descripcion": "auto 4 puertas",
      "marca": 'Nissan',
      "year": "Febrero 3 2020",
      "precio": 250000,
      "puntos": 3.3,
      "ImagenUrl":"https://wieck-nissanao-production.s3.amazonaws.com/photos/cc12bb6c50b6ff98695d616be92cb3183849636e/preview-928x522.jpg"
    },

    {
      "productoId":2,
      "modelo": 'Rio',
      "descripcion": "auto 4 puertas",
      "marca": 'Kia',
      "year": "Marzo 24 2000",
      "precio": 150000,
      "puntos": 4.3,
      "ImagenUrl":"https://coches.com/fotos_historicas/kia/Rio-2000/kia_rio_r1.jpg"
    },

    {
      "productoId":3,
      "modelo": 'March',
      "descripcion": "auto 2 puertas",
      "marca": 'Nissan',
      "year": "Marzo 24 2022",
      "precio": 350000,
      "puntos": 2.3,
      "ImagenUrl":"https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/65776ea3/march1.jpg"
    }
  ]

  

  constructor() { }

ShowImagen() :void {
  this.muestraImg= !this.muestraImg;
}

  ngOnInit(): void {
  }

}
