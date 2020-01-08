import { Component, OnInit } from '@angular/core';
import { OrdenTwoService } from '../../servicios/ordenTwo.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  items: any;
  itemSubscription: any;
  status = 'loading';

  constructor(private ordenTwoService: OrdenTwoService) { }
  
  ngOnInit() {
    // agregar ordenes y listar
    
      this.itemSubscription = this.ordenTwoService.itemList().subscribe(item => {
        console.log(item);
      this.items = item;
      this.status = 'loaded';
      
      })
    
  }

  deleteItem(event, item) {
    console.log(item);
    this.ordenTwoService.deleteItem(item);
  }

}
