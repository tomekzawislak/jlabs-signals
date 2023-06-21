import {Component, computed, Signal, signal} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  count$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  doubleCount$: Observable<number> = this.count$.pipe(
    map(value => value * 2)
  )

  x$ = new BehaviorSubject<number>(10);
  y$ = new BehaviorSubject<number>(5);

  z$: Observable<number> = combineLatest([this.x$, this.y$]).pipe(
    map(([x, y]) => x + y)
  );

  constructor() {
    setInterval(() => {
      this.count.update(() => this.count() + 1)
    }, 1000);

    setInterval(() => {
      this.count$.next(this.count$.value + 1)
    }, 1000);
  }

  changeX() {
    this.x$.next(99);
  }
}
