
import { Injectable } from '@angular/core';
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query} from '@angular/fire/firestore';
import { Observable } from 'rxjs';//modulo de angular que nos devuelve los datos 
import { map } from 'rxjs/operators';
import { bindCallback } from 'rxjs';

export interface Item { id:string, name: string, order: any, total: number }


@Injectable({
    providedIn: 'root'
})

export class OrdenTwoService {
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>; // mi propiedad items es un arreglo de Item
  itemDoc: AngularFirestoreDocument<Item>;


    constructor(private afs: AngularFirestore){
        this.itemsCollection = afs.collection<Item>('items');
        this.items = this.itemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Item;
            data.id = a.payload.doc.id;
          return data;
          }))
          
        );
        
      }

    itemList(){
        return this.items;
      }
    // metodo para agregar item
      addItem(item: Item) {
        this.itemsCollection.add(item,);
      }

      //metodo para actualizar 

      updateList(){
    
      }

      deleteItem(item: Item) {
        this.itemDoc = this.afs.doc(`items/${item.id}`);
        this.itemDoc.delete();
    
    }
  }