import { Component } from '@angular/core';


@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html',
})

export class  BodyComponent {
    mostrar = 'true';

    frase: any = {
    mensaje: 'Solo puedes llegar mas rápido, pero acompañado llegas mas lejos',
    autor: 'Anonimo'
};

personajes: string[] = ['Pollito', 'Patico', 'Cerdito'];

}
