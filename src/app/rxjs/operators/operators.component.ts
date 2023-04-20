import { Component, OnInit } from '@angular/core';
import { Subject, Observable, from } from 'rxjs';
import { tap, reduce, map, take, scan } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  reduceOperatorSubject$ = new Subject<number>();
  scanOperatorSubject$=new Subject<number>();
  delayOperatorSubject$=new Subject<string>();

  operatorObservable$!: Observable<number>;

  ngOnInit() {
    this.reduceOperator();
    this.scanOperator();
  }

  triggerReduceSubject() {
    this.reduceOperatorSubject$.next(1);
    this.reduceOperatorSubject$.next(3);
    this.reduceOperatorSubject$.next(5);
  }

  reduceOperator(){
    this.operatorObservable$ = this.reduceOperatorSubject$.pipe(take(3),
    tap(console.log),
    reduce((acc, pre: number) =>
      acc + pre, 0
    ),
    tap(res => {
      console.log('reduce result', res);
    }));
  }

  scanOperator(){
    this.operatorObservable$ = this.scanOperatorSubject$.pipe(
      tap(console.log),
      scan((acc, pre: number) =>
        acc + pre, 0
      ),
      tap(res => {
        console.log('scan result', res);
      }));
  }

  triggerScanSubjectt() {
    this.scanOperatorSubject$.next(1);
    this.scanOperatorSubject$.next(3);
    this.scanOperatorSubject$.next(5);
  }

  executeOperator(operator: string) {
    switch (operator) {
      case 'reduce': return this.triggerReduceSubject();
      case 'scan': return this.triggerScanSubjectt();
    }
  }

}
