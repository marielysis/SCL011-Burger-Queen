import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
