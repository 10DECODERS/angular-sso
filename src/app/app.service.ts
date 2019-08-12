import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  isChannelCreated: Boolean = false;

  private dataSource = new BehaviorSubject('hi');
  data = this.dataSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }


  updatedDataSelection(hi) {
    this.dataSource.next(hi);
  }

  // save
  save(url, payload): Observable<any> {
    return this.http.post(url, payload);
  }

  // put
  update(url, payload): Observable<any> {
    return this.http.put(url, payload);
  }

  // get
  get(url): Observable<any> {
    return this.http.get(url);
  }

  // delete
  delete(url): Observable<any> {
    return this.http.delete(url);
  }

  setChannelTrue(value: boolean) {
    this.isChannelCreated = value;
  }
}
