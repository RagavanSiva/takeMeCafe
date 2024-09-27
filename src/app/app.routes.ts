import { Routes } from '@angular/router';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { JuicesComponent } from './juices/juices.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: 'food',
    component: FoodMenuComponent,
  },
  {
    path: 'juice',
    component: JuicesComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'food',
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
];
