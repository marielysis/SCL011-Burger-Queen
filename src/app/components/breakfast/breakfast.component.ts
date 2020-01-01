import { Component, OnInit } from '@angular/core';
// import { OrdenService } from 'src/app/servicios/orden.service';
import{OrdenTwoService} from '../../servicios/ordenTwo.service'


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  orden: any[] 
  BUTTONS =

  [
    { order: "Café americano",cost: 500},  
    { order: "Cafe con leche", cost: 700 },
    { order: "Sandwich de jamón y queso", cost: 1000 },
    { order: "Jugo natural", cost: 700 }

  ]

  constructor(private OrdenTwoService: OrdenTwoService) {


  }

 ngOnInit() {
// this.orden = this.ordenService.getOrdenes();
// console.log(this.orden);
  }

  item: any = {
    name: '',
    order: [],
    total: 0
  }

  add(value: any) {
    this.item.name = value;
    console.log(this.item)
  }
  clickedButton(value: any, price: number) {
    (this.item.order).push({ "value": value, "cost": price });
    this.item.total += price;
  }

  sendToKitchen() {
    this.OrdenTwoService.addItem(this.item);
    this.item.name = '';
    this.item.order = [],
      this.item.total = 0
  }

}

