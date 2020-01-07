import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';//modulo de angular que nos devuelve los datos 
import { Product } from '../models/product';
import { Item } from '../models/item';
import { map, filter } from 'rxjs/operators';


@Injectable ()
export class OrdenService {
  // Variable para guardar data de json
    private orden: any[] = [{ products
    }];

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;

  itemsCollection: AngularFirestoreCollection<Product>;
  items: Observable<Product[]>;
  itemDoc: AngularFirestoreDocument<Product>;

    constructor(public db: AngularFirestore){
      // peticion de base datos firestore collection produts
      this.productsCollection = this.db.collection('products');
      this.products = this.productsCollection.snapshotChanges().pipe(map(actions => { 
        return actions.map(a => {
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        }); 
      }));

      // peticion de base datos firestore collection items
      this.itemsCollection = this.db.collection<Item>('items');
        this.items = this.itemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Item;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
    }
    // Retorna los productos desde base de datos firestore
    getProducts() {
      return this.products;
    }
    // Metodo creado para agregar un producto nuevo en la data firestore
    addProducts(product: Product) {
      return this.productsCollection.add(product);
    }  

    // Metodo creado para eliminar un producto que esta dentro de la data firestore
    deleteProduct(product: Product) {
      this.productDoc = this.db.doc(`products/${product.id}`);
      this.productDoc.delete();
    }

    // Metodo creado para actualizar un producto dentro de la data firestore
    updateProduct(product: Product) {
      this.productDoc = this.db.doc(`products/${product.id}`);
      this.productDoc.update(product);
    }
// metodo para guardar los productos de lista de ordenes en firestore 
    itemList(){
      return this.items;
    }
  // metodo para agregar pedido a la bd en firestore para coleccion items
    addItem(item: Item) {
      this.itemsCollection.add(item,);
    }

    deleteItem(item: Item) {
      this.itemDoc = this.db.doc(`items/${item.id}`);
      this.itemDoc.delete();
    }
    updateItem(item: Item) {
      this.itemDoc = this.db.doc(`items/${item.id}`);
      this.itemDoc.update(item);
    }
}

