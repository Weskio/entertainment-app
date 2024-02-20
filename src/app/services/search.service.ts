import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  public searchKeySubject = new Subject<string>();

  searchUpdate(text: string) {
    this.searchKeySubject.next(text);
  }
}
