import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AllRidesModule } from "./all-rides/all-rides.module";
import { BookRideModule } from "./book-ride/book-ride.module";
import { HomeModule } from "./home/home.module";
import { SharedService } from "./services/share.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllRidesModule,
    BookRideModule,
    HomeModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
