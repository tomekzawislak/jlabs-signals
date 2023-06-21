import {Component, signal} from '@angular/core';
import {Subject} from 'rxjs';

export interface Product {
  name: string;
  price: number;
  id: number;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Hairdryer',
      price: 23
    },
    {
      id: 2,
      name: 'Clock',
      price: 9.99
    },
    {
      id: 3,
      name: 'Chair',
      price: 50
    },
  ]
  selectedProductId$: Subject<number> = new Subject<number>();
  onProductClick(productId: number) {
    this.selectedProductId$.next(productId);
  }

  selectedProductId = signal(0);
  onProductClickSignals(productId: number) {
    this.selectedProductId.set(productId);
  }

}
