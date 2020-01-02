import { Component, OnInit } from '@angular/core';
import { OrdenDesayunoService } from '../../servicios/ordenDesayuno.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  orden: any[] = [];
  price: any = [];
  product: [];


  constructor(private ordenService: OrdenDesayunoService) {


  }

 ngOnInit() {
  this.orden = this.ordenService.getOrdenes();
  console.log(this.orden);
  this.price = this.ordenService.getProducts();
  console.log(this.price);
  this.price = this.price.reduce((acum: any, elemt: any) => acum + elemt, 0);
  console.log(this.price);
  }


}
