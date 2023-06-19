import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss']
})
export class RandomNumberComponent {

  public randomNumber = signal(this.generateRandomNaturalNumber());

  public sqrt = computed(() => Math.sqrt(this.randomNumber()));
  public pow2 = computed(() => Math.pow(this.randomNumber(), 2));
  public log = computed(() => Math.log(this.randomNumber()));
  public exp = computed(() => Math.exp(this.randomNumber()));

  public reloadNumber(): void {
    this.randomNumber.set(this.generateRandomNaturalNumber());
  }

  public increaseNumber(value: number): void {
    this.randomNumber.update(() => this.randomNumber() + value);
  }

  private generateRandomNaturalNumber(): number {
    return Math.floor(Math.random() * 100);
  }

}
