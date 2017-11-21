import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Event form
import { EventFormComponent} from "./event-form/event-form.component";
import { FlightFormComponent } from './event-form/flight-form/flight-form.component';
import { FlightFormService } from './event-form/flight-form/flight-form.service';
import { CargoFormComponent } from './event-form/cargo-form/cargo-form.component';
import { CargoFormService } from './event-form/cargo-form/cargo-form.service';

// Event list
import { EventListComponent} from "./event-list/event-list.component";
import { FlightListComponent } from "./event-list/flight-list/flight-list.component";
import { FlightListService } from "./event-list/flight-list/flight-list.service";
import { CargoListComponent } from "./event-list/cargo-list/cargo-list.component";
import { CargoListService } from "./event-list/cargo-list/cargo-list.service";

// Router
import { HttpHelper } from "./http/http-helper/http.helper";

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    FlightFormComponent,
    CargoFormComponent,
    EventListComponent,
    FlightListComponent,
    CargoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FlightFormService,
    CargoFormService,
    FlightListService,
    CargoListService,
    HttpHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
