import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Cargo } from '../../models/cargo';
import { HttpHelper } from "../../http/http-helper/http.helper";

@Injectable()
export class CargoFormService {

  constructor(private http: Http, private routerHelper: HttpHelper) { }

  private getServiceURL() : string {
    return this.routerHelper.getHaulierBookingUrl();
  }

  sendEvent(event: Cargo): Observable<any> {
    return this.http.post(this.getServiceURL(), event).map(res => res.json());
  }

}
