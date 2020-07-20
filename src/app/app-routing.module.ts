import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BookRideComponent } from "./book-ride/book-ride.component";
import { AllRidesComponent } from "./all-rides/all-rides.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "book",
    component: BookRideComponent,
  },
  {
    path: "all",
    component: AllRidesComponent,
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
