import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Burger Queen';

  items: Observable<any[]>;
  constructor(public db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();//conectando con la base de datos y que me traiga los valores de la base(devuelve un valor de arreglo)
  }
  
}
