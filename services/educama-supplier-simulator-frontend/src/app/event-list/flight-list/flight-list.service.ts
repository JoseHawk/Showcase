import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../models/flight';
import { HttpHelper } from "../../http/http-helper/http.helper";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FlightListService {

    // Injecting the http client into the service
    constructor(private http: Http, private routerHelper: HttpHelper) { }

   private getServiceURL() : string {
      return this.routerHelper.getAirlineBookingUrl();
    }

  // Method retrieve all the flights
    getFlights(): Observable<Flight[]> {
        return this.http.get(this.getServiceURL())
            .map(this.parseData)
            .catch(this.handleError);
    }

    // Method confirm the airline booking
    confirmAirlineBooking(bookingId: string): Observable<Flight> {
        return this.http.post(`${this.getServiceURL()}/${bookingId}/confirm`, {})
            .map((response: Response) => <Flight>response.json())
            .catch(this.handleError);
    }

    // Method decline the airline booking
    declineAirlineBooking(bookingId: string): Observable<Flight> {
        return this.http.post(`${this.getServiceURL()}/${bookingId}/reject`, {})
            .map((response: Response) => <Flight>response.json())
            .catch(this.handleError);
    }

    // Method for departed flight
    departedFlight(bookingId: string): Observable<Flight> {
        return this.http.post(`${this.getServiceURL()}/${bookingId}/departed`, {})
            .map((response: Response) => <Flight>response.json())
            .catch(this.handleError);
    }

    // Method for arrived flight
    arrivedFlight(bookingId: string): Observable<Flight> {
        return this.http.post(`${this.getServiceURL()}/${bookingId}/arrived`, {})
            .map((response: Response) => <Flight>response.json())
            .catch(this.handleError);
    }

    // This method parses the data to JSON
    private parseData(res: Response) {
        return res.json() || [];
    }

    // Displays the error message
    private handleError(error: Response | any) {
        let errorMessage: string;

        errorMessage = error.message ? error.message : error.toString();

        // This returns another Observable for the observer to subscribe to
        return Observable.throw(errorMessage);
    }
}
