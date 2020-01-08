import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/servicios/orden.service';
import { Product } from 'src/app/models/product';
import { map, filter} from "rxjs/operators";
import { Item } from 'src/app/models/item';




@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {


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
    // Filrando productos segun menu desayuno
      this.products = products.filter((element: any) => element.type === 'desayuno');
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
    (this.item.order).push({ "value": value, "cost": product });
    console.log(this.item.order);
    this.item.total += product;

  }

//enviar a cocina


  addItem() {
  if (this.item.name !== '' && this.item.order !== '' && this.item.total !== 0) {
   this.ordenService.addItem(this.item);
   this.item = {} as Item;
   console.log(this.item);
  }
 }

 ngOnDestroy(){
  this.productsSubscription.unsubscribe();
}


}
