import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import {RandomNumberComponent} from './components/random-number/random-number.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {CounterComponent} from './components/counter/counter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full'
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'random-number',
    component: RandomNumberComponent
  },
  {
    path: 'products-list',
    component: ProductsListComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: '**',
    redirectTo: 'cars'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
