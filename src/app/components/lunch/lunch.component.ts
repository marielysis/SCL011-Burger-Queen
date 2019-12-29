import { Component, OnInit } from '@angular/core';
import { OrdenTwoService } from 'src/app/servicios/ordenTwo.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  orden: any[] = [];

  constructor(private ordenTwoService: OrdenTwoService) { }

  ngOnInit() {
    this.orden = this.ordenTwoService.items();
    console.log(this.orden);
  }

}
