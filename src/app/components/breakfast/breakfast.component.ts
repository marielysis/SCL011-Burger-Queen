import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/servicios/orden.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  orden: any[] = [];
  price: any = [];
  product: [];


  constructor(private ordenService: OrdenService) {


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
