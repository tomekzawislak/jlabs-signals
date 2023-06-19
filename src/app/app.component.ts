import {Component, computed, signal, Signal, WritableSignal} from '@angular/core';

export interface Car {
  name: string;
  engine: Engine;
  price: number;
  addOns: AddOn[];
}
export interface AddOn {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}

export interface Engine {
  id: number;
  name: string;
  price: number;
  power: number;
  torque: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
