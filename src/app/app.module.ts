import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { APP_ROUTING } from './app.routes';

=======
// rutas

import { APP_ROUTING } from './app.routes';

// servicios

import { OrdenService } from './servicios/orden.service';

// componentes

>>>>>>> d60bee521ae6d95c00a7654d867dff7b8bcb2823
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { TablesComponent } from './components/tables/tables.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



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
    NavBarComponent
  ],

  imports: [
    BrowserModule,
    APP_ROUTING
<<<<<<< HEAD
=======
  ],
  providers: [
    OrdenService
>>>>>>> d60bee521ae6d95c00a7654d867dff7b8bcb2823
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
