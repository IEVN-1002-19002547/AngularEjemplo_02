import { Component } from '@angular/core';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:Iproducto[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"Dos puertas",
      "year":"Marzo 5, 2022",
      "precio":120000,
      "Marca":"Nissan",
      "Color":"Gris Metalico",
      "ImageUrl":"https://www.nissancelayarenacimiento.com.mx/inventoryphotos/9614/9bwdl5bz1np006086/ip/1.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"Cuatro puertas familiar",
      "year":"Febrero 3, 2020",
      "precio":180000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImageUrl":"https://d2v9mob6nwdg55.cloudfront.net/vo/imagenes/h_img_6_18246_01_1693107237.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"Dos puertas familiar",
      "year":"Enero 2, 2023",
      "precio":200000,
      "Marca":"Kia",
      "Color":"Azul Marino",
      "ImageUrl":"https://phantom-marca.unidadeditorial.es/ebeac71437aeb79312db1ab6b78f1f95/crop/0x152/2046x1300/resize/1200/f/jpg/assets/multimedia/imagenes/2021/01/21/16112406024829.jpg"
    }
  ]
}
