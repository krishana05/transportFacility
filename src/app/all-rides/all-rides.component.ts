import { Component, OnInit } from "@angular/core";
import { SharedService } from "../services/share.service";

@Component({
  selector: "app-all-rides",
  templateUrl: "./all-rides.component.html",
  styleUrls: ["./all-rides.component.scss"],
})
export class AllRidesComponent implements OnInit {
  availableRides: Array<object>;
  constructor(private service: SharedService) {
    this.availableRides = [];
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.availableRides = this.service.getData() || [];
    if (this.availableRides.length === 0) {
      this.availableRides = JSON.parse(
        window.localStorage.getItem("allRides") || "[]"
      );
    }
  }
}
