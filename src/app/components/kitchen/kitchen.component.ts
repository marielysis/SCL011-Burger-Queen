import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../servicios/orden.service';
import {  } from '../../models/item';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  items: any;

  constructor(private ordenService: OrdenService) { }
  
  ngOnInit() {
    // agregar ordenes y listar
    
      this.ordenService.itemList().subscribe(item => {
        console.log(item);
      this.items = item;
      })
    
  }

}
