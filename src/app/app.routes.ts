import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { TablesComponent } from './components/tables/tables.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'waiter', component: WaiterComponent },
    { path: 'tables', component: TablesComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'breakfast', component: BreakfastComponent},
    { path: 'lunch', component: LunchComponent},
<<<<<<< HEAD
=======
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
>>>>>>> d60bee521ae6d95c00a7654d867dff7b8bcb2823
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


