import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Flight } from '../../models/flight';
import { HttpHelper } from "../../http/http-helper/http.helper";

@Injectable()
export class FlightFormService {

  constructor(private http: Http, private routerHelper: HttpHelper) { }

  private getServiceURL() : string {
    return this.routerHelper.getAirlineBookingUrl();
  }

  sendEvent(event: Flight): Observable<any> {
    return this.http.post(this.getServiceURL(), event).map(res => res.json());
  }

}
