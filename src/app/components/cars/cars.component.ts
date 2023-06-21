import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {AddOn, Car} from '../../app.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
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
