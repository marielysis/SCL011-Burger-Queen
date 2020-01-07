import { Component, OnInit } from '@angular/core';
import { OrdenTwoService } from '../../servicios/ordenTwo.service';
import {  } from '../../models/item';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  items: any;

  constructor(private ordenTwoService: OrdenTwoService) { }
  
  ngOnInit() {
    // agregar ordenes y listar
    
      this.ordenTwoService.itemList().subscribe(item => {
        console.log(item);
      this.items = item;
      })
    
  }

  deleteItem(event, item) {
    console.log(item);
    this.ordenTwoService.deleteItem(item);
  }

}
