import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

interface Employee { }

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  createEmployeeSubject$ = new Subject<Employee>();

  createEmployee$: Observable<string> = this.createEmployeeSubject$.pipe(
    tap(() => {
      console.log('Side effect logged')
    }),
    switchMap((data) => { return 'make call to BE server here' }),
    map(res => res),
    tap(() => console.log)
  );

  employeeSubscriber = this.createEmployee$.subscribe();

  emitSubject() {
    this.createEmployeeSubject$.next({})
  }
}
