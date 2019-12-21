import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';
import { map, filter } from 'rxjs/operators';

@Injectable ()
export class OrdenTwoService {

private orden: any[] = [{ products
    }];

    private ordenBreak: any[] = [{ products
    }];

constructor() {
        console.log('Servicio listo para usar!!!');
    }


getOrdenes() {
    return this.orden[0].products.filter((element: any) => element.type === 'almuerzo');
}

}
