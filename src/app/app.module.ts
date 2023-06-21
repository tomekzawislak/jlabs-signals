import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CarsComponent} from './components/cars/cars.component';
import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {RandomNumberComponent} from './components/random-number/random-number.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {CounterComponent} from './components/counter/counter.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    RandomNumberComponent,
    ProductsListComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
