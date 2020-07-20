import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AllRidesComponent } from "./all-rides.component";
import { TableModule } from "../table/table.module";

@NgModule({
  declarations: [AllRidesComponent],
  imports: [CommonModule, FormsModule, TableModule],
})
export class AllRidesModule {}
