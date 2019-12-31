import { Component, OnInit } from '@angular/core';
import {OrdenTwoService} from '../../servicios/ordenTwo.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  items: any;

  constructor(private ordenTwoService: OrdenTwoService) { }

  ngOnInit() {

      this.ordenTwoService.itemList().subscribe(item => {
      this.items = item;
      });

  }

}
