import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TablesComponent } from './components/tables/tables.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { ProfileComponent } from './components/profile/profile.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tables', component: TablesComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'breakfast', component: BreakfastComponent},
    { path: 'lunch', component: LunchComponent},
    { path: 'kitchen', component: KitchenComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


