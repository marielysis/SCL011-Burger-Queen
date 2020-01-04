import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../servicios/orden.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  product = {} as Product;
  adding: boolean = false;

  constructor(private ordenService: OrdenService) { }

  ngOnInit() {
  }

  addProduct() {
    if(this.product.name !== '' && this.product.type !== '' && this.product.price !== 0) {
    this.ordenService.addProducts(this.product);
    this.product = {} as Product;
    this.adding = true;
  }
  }

}
