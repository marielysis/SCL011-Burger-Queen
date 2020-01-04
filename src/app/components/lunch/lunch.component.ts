import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/servicios/orden.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  orden: any[] = [];
  price: any = [];
  products: any [];
  editingProduct: Product;
  editing: boolean = false;


  constructor(private ordenService: OrdenService) { }

  ngOnInit() {
    this.orden = this.ordenService.getOrdenes();
    console.log(this.orden);
    this.price = this.ordenService.getProductss();
    console.log(this.price);
    this.price = this.price.reduce((acum: any, elemt: any) => acum + elemt, 0);
    console.log(this.price);

    this.ordenService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }
  deleteProduct(event, product) {
    console.log(product);
    this.ordenService.deleteProduct(product);
  }

  editProduct(event, product) {
    this.editingProduct = product;
    this.editing = !this.editing;
  }

  updateProduct(event, product) {
    console.log(this.editingProduct);
    this.ordenService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }

}
