import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BookRideComponent } from "./book-ride.component";
import { TableModule } from "../table/table.module";

@NgModule({
  declarations: [BookRideComponent],
  imports: [CommonModule, FormsModule, TableModule],
})
export class BookRideModule {}
