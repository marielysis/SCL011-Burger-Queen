import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/servicios/orden.service';
import { Product } from 'src/app/models/product';
import { map, filter} from "rxjs/operators";
import { Item } from 'src/app/models/item';



@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  products: any [];
  editingProduct: Product;
  editing: boolean = false;
  menuAlmz: any;
  product = {} as Product;
  order: any[];
  productsSubscription: any;
  

  constructor(private ordenService: OrdenService) { }

  ngOnInit() {

    // Accediendo a los datos que estan almacenados en firestore
    this.productsSubscription = this.ordenService.getProducts().subscribe(products => {
      console.log(products);
    // Filrando productos segun menu Almuerzo
      this.products = products.filter((element: any) => element.type === 'almuerzo');
    });

  }

  item: any = {
    name: '',
    order: [],
    total: 0
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

  add(value: any) {
    this.item.name = value;
    console.log(this.item)
  }

  clickedButton(value: any, product) {
    console.log(product);
    (this.item.order).push({ "value": value, "cost": product });
    this.item.total += product;

  }


  addItem() {
  if (this.item.name !== '' && this.item.order !== '' && this.item.total !== 0) {
   this.ordenService.addItem(this.item);
   this.item = {} as Item;
  }
 }

 deleteOrder(i, order) {
  console.log(order);
  console.log(i);
  this.item.order.splice(i, 1);
  this.item.total -= order;
  console.log(this.item.order);
}

ngOnDestroy(){
  this.productsSubscription.unsubscribe();
}

}
