import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';//modulo de angular que nos devuelve los datos 
import { Product } from '../models/product';
import { map, filter } from 'rxjs/operators';


@Injectable ()
export class OrdenService {
  // Variable para guardar data de json
    private orden: any[] = [{ products
    }];

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;


    constructor(public db: AngularFirestore){
      // this.products = this.db.collection('products').valueChanges();
      this.productsCollection = this.db.collection('products');
      this.products = this.productsCollection.snapshotChanges().pipe(map(actions => { 
        return actions.map(a => {
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        }); 
      }));
    }
    // Retorna los productos desde base de datos firestore
    getProducts() {
      return this.products;
    }

    addProducts(product: Product) {
      return this.productsCollection.add(product);
    }  
    // filtramos la data del json para que solo me muestre los desayunos
    getOrdenes() {
    return this.orden[0].products.filter((element: any) => element.type === 'almuerzo');
    }
    // usamos map para crear un arreglo con los precios de los productos de data json
    getProductss() {
        return this.orden[0].products.map((elementProduct: any ) => elementProduct.price);
        }


    deleteProduct(product: Product) {
      this.productDoc = this.db.doc(`products/${product.id}`);
      this.productDoc.delete();
    }
    updateProduct(product: Product) {
      this.productDoc = this.db.doc(`products/${product.id}`);
      this.productDoc.update(product);
    }
}

