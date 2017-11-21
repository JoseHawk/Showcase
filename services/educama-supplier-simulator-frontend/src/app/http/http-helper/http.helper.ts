import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";

/*
 * Helper Class for routing related support functions
 */
@Injectable()
export class HttpHelper {

  private REGULAR_PATH = '/api/';

  public getAirlineBookingUrl() : string {
    return HttpHelper.getRestApiBaseUrl() + this.REGULAR_PATH + 'airlinebooking';
  }

  public getHaulierBookingUrl() : string {
    return HttpHelper.getRestApiBaseUrl() + this.REGULAR_PATH + 'haulierbooking';
  }

  /**
   * Provides the base URL used for Rest API calls to the backend.
   */
  public static getRestApiBaseUrl(): string {
    const _location: Location = window.location;
    return environment.apiBaseUrl !== "" ?
      environment.apiBaseUrl :
      HttpHelper.determineApiBaseUrlBasedOnFrontendUrl(_location);
  }

  /**
   * Determines the base URL from the front end URL
   */
  public static determineApiBaseUrlBasedOnFrontendUrl(location: Location): string {
    return location.host.includes("localhost") ?
      location.protocol + "//localhost:" + (parseInt(location.port, 10) + 1) :
      location.protocol + "//" + location.host.replace("front", "back");
  }
}
