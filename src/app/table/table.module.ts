import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TableComponent } from "./table.component";
import { FilterPipe } from "../pipes/filter.pipe";

@NgModule({
  declarations: [TableComponent, FilterPipe],
  imports: [CommonModule, FormsModule],
  exports: [TableComponent],
})
export class TableModule {}
