import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';
import { map, filter } from 'rxjs/operators';

@Injectable ()
export class OrdenService {

    private orden: any[] = [{ products
    }];


    constructor() {
        console.log('Servicio listo para usar!!!');
    }

    // filtramos la data del json para que solo me muestre los desayunos
    getOrdenes() {
    return this.orden[0].products.filter((element: any) => element.type === 'desayuno');
    }
}




