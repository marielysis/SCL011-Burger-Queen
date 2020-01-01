import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import{OrdenTwoService} from '../../servicios/ordenTwo.service'
 
=======
import {OrdenTwoService} from '../../servicios/ordenTwo.service';

>>>>>>> f962091d4d59551e9c4ce0fe57a4c183c37adaba
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  items: any;

<<<<<<< HEAD
  constructor(private OrdenTwoService: OrdenTwoService) { }
  
  ngOnInit() {
    
      this.OrdenTwoService.itemList().subscribe(item => {
      this.items = item;
      })
    
=======
  constructor(private ordenTwoService: OrdenTwoService) { }

  ngOnInit() {

      this.ordenTwoService.itemList().subscribe(item => {
      this.items = item;
      });

>>>>>>> f962091d4d59551e9c4ce0fe57a4c183c37adaba
  }

}
