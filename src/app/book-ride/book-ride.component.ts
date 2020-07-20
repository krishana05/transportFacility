import { Component, OnInit } from "@angular/core";
import { SharedService } from "../services/share.service";
import { Ride } from "../rides.interface";

@Component({
  selector: "app-book-ride",
  templateUrl: "./book-ride.component.html",
  styleUrls: ["./book-ride.component.scss"],
})
export class BookRideComponent implements OnInit {
  availableRides: Array<Ride>;
  currentTime: any;
  constructor(private service: SharedService) {
    this.availableRides = [];
    this.getData();
  }
  ngOnInit() {
    this.filterRides();
  }
  calculateTimeDiff(pickTime) {
    const date = new Date();
    this.currentTime = date.getHours() + ":" + date.getMinutes();
    // console.log(this.currentTime);
    const t1 = this.currentTime.split(":");
    const t2 = pickTime.split(":");
    const d1 = new Date(0, 0, 0, t1[0], t1[1]);
    const d2 = new Date(0, 0, 0, t2[0], t2[1]);
    const hrDiff = d2.getHours() - d1.getHours();
    const minDiff = d2.getMinutes() - d1.getMinutes();
    // console.log({ hrDiff, minDiff });
    return { hrDiff, minDiff };
  }
  getData() {
    this.availableRides = this.service.getData() || [];
    if (this.availableRides.length === 0) {
      this.availableRides = JSON.parse(
        window.localStorage.getItem("allRides") || "[]"
      );
    }
  }
  filterRides() {
    this.availableRides = this.availableRides.filter((ride) => {
      const time = this.calculateTimeDiff(ride.time);
      // console.log(time);
      if (
        (time.hrDiff === 1 && time.minDiff <= 0) ||
        (time.hrDiff === 0 && time.minDiff >= 0)
      ) {
        return true;
      } else {
        return false;
      }
    });
  }
}
