import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';

@Injectable ()
export class OrdenService {

private orden: any[] = [{ products
    }];


constructor() {
        console.log('Servicio listo para usar!!!');
    }


getOrdenes() {
    return this.orden[0].products;
}

}

