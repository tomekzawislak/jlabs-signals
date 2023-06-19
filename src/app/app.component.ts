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
  public selectedCar: WritableSignal<Car> = signal({
    name: 'Nice car',
    engine: {
      id: 1,
      name: '1.6 TDI',
      price: 100000,
      power: 160,
      torque: 253
    },
    price: 100000,
    addOns: []
  });
  public addOns: WritableSignal<AddOn[]> = signal([
    {
      id: 1,
      name: 'Safety pack',
      price: 4000,
      selected: false
    },
    {
      id: 2,
      name: 'Sport pack',
      price: 2000,
      selected: false
    },
    {
      id: 3,
      name: 'Drive assist pack',
      price: 6000,
      selected: false
    },
  ]);

  public totalPrice: Signal<number> = computed(() => this.selectedCar().price + this.addOnsPrice());

  addOnsPrice(): number {
    return this.addOns()
      .filter(el => el.selected)
      .map(el => el.price)
      .reduce((partial, current) => partial + current, 0);
  }

  updateAddOnsSelection(selected: boolean, addOn: AddOn): void {
    this.addOns.mutate(addOns => addOns.find(el => el.id === addOn.id)!.selected = selected);
  }
}
