import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import {RandomNumberComponent} from './components/random-number/random-number.component';

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
    path: '**',
    redirectTo: 'cars'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
