import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { TablesComponent } from './components/tables/tables.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'waiter', component: WaiterComponent },
    { path: 'tables', component: TablesComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'breakfast', component: BreakfastComponent},
    { path: 'lunch', component: LunchComponent},
    { path: 'kitchen', component: KitchenComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


