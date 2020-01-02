
import { Injectable } from '@angular/core';
import{ AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';//modulo de angular que nos devuelve los datos 
import { map } from 'rxjs/operators';

export interface Item { id:string, name: string, order: any, total: number }


@Injectable({
    providedIn: 'root'
})

export class OrdenTwoService{
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>; // mi propiedad items es un arreglo de Item

    constructor(private afs: AngularFirestore){
        this.itemsCollection = afs.collection<Item>('items');
        this.items = this.itemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Item;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
      }

    itemList(){
        return this.items;
      }
    
      addItem(item: Item) {
        this.itemsCollection.add(item);
      }
    
    }