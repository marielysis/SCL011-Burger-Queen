import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas

import { APP_ROUTING } from './app.routes';

// servicios

import { OrdenService } from './servicios/orden.service';
import { OrdenTwoService } from './servicios/ordenTwo.service';

// componentes

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { TablesComponent } from './components/tables/tables.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';


//firebase
import { AngularFireModule } from '@angular/fire';// para conectarnos a los servicios de firibase
import {AngularFirestoreModule} from '@angular/fire/firestore';

// environment conf
import {environment} from '../environments/environment';// configuracion a donde me voy a conectar 




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    WaiterComponent,
    TablesComponent,
    MenuComponent,
    BreakfastComponent,
    LunchComponent,
    NavBarComponent,
    KitchenComponent
  ],

  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  
  ],

  providers: [
    OrdenService,
    OrdenTwoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
