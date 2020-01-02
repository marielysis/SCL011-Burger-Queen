import { Component, OnInit } from '@angular/core';
import { OrdenDesayunoService } from 'src/app/servicios/ordenDesayuno.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  orden: any[] = [];

  constructor(private ordenDesayunoService: OrdenDesayunoService) {


  }

 ngOnInit() {
  this.orden = this.ordenDesayunoService.getOrdenes();
  console.log(this.orden);
  }


}
