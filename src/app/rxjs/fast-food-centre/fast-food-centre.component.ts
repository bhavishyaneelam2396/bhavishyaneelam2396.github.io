import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject, zip } from 'rxjs';
import { map, switchMap, tap, take, mergeMap } from 'rxjs/operators';

type shawrmaIngredients = ["flat bread", "meat", "sause", "tomato", "cabbage"];

interface Order {
  amount: number;
  customerID: number;
}
interface Product {
  product: shawrmaIngredients;
  customerID: number;
}
@Component({
  selector: 'app-fast-food-centre',
  templateUrl: './fast-food-centre.component.html',
  styleUrls: ['./fast-food-centre.component.scss']
})
export class FastFoodCentreComponent implements OnInit {
  shawarma$!: Observable<shawrmaIngredients>;
  delivery$!: Observable<Product>;

  _order = new Subject<Order>();
  _flatBread = new Subject<'flat bread'>();
  _meat = new Subject<"meat">();
  _sause = new Subject<'sause'>();
  _tomato = new Subject<'tomato'>();
  _cabbage = new Subject<'cabbage'>();

  flatBreadCounter = 0;
  meatCounter = 0;
  sauseCounter = 0;
  tomatoCounter = 0;
  cabbageCounter = 0;
  customerCounter = 0;

  ngOnInit() {
// zip emits only when all the observers emits atleast one new value;
    // this.shawarma$ = zip(this._flatBread.pipe(map((data) => `${data} ${++this.flatBreadCounter}`), tap(console.log)),
    //   this._meat.pipe(map((data) => `${data} ${++this.meatCounter}`), tap(console.log),),
    //   this._sause.pipe(map((data) => `${data} ${++this.sauseCounter}`), tap(console.log)),
    //   this._tomato.pipe(map((data) => `${data} ${++this.tomatoCounter}`), tap(console.log)),
    //   this._cabbage.pipe(map((data) => `${data} ${++this.cabbageCounter}`), tap(console.log))).pipe(tap((wrap) => {
    //     console.log('Enjoy, your order is prepared', wrap);
    //   }));
// combineLatest emits every time when a new value is review for each obserer
    this.shawarma$ = combineLatest([this._flatBread.pipe(map((data) => `${data} ${++this.flatBreadCounter}`), tap(console.log)),
      this._meat.pipe(map((data) => `${data} ${++this.meatCounter}`), tap(console.log),),
      this._sause.pipe(map((data) => `${data} ${++this.sauseCounter}`), tap(console.log)),
      this._tomato.pipe(map((data) => `${data} ${++this.tomatoCounter}`), tap(console.log)),
      this._cabbage.pipe(map((data) => `${data} ${++this.cabbageCounter}`), tap(console.log))]).pipe(tap((wrap) => {
        console.log('Enjoy, your order is prepared', wrap);
      }));

    this.delivery$ = this._order.pipe(tap((order) => { console.log('Order recieved:', order); }),
      mergeMap(({ amount, customerID }) => this.shawarma$.pipe(take(amount), map((shawarma) =>
        ({ product: shawarma, customerID })
      ), tap(product => { console.log('Product Deliverd', product) }))));
  }

  placeOrder() {
    const amount = Math.floor(Math.random() * 3) + 1;
    ++this.customerCounter;
    this._order.next({ amount:1, customerID: this.customerCounter })
  }
}
