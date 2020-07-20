import { Component, OnInit } from "@angular/core";
import { SharedService } from "../services/share.service";
import { Ride } from "../rides.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  rideObj: Ride;
  vehicleType: Array<string>;
  availableRides: Array<object>;
  constructor(private service: SharedService) {
    this.vehicleType = ["Bike", "Car"];
    this.reset();
    this.availableRides = [];
  }
  reset() {
    this.rideObj = {
      id: 0,
      empId: "",
      vehicleType: this.vehicleType[0],
      vehicleNumber: "",
      vacantSeats: 0,
      time: "",
      pickupPoint: "",
      destination: "",
    };
  }
  ngOnInit() {
    this.getData();
  }
  vTypeChanged(value) {
    // console.log(value);
    this.rideObj.vehicleType = value;
  }
  getData() {
    this.availableRides = JSON.parse(
      window.localStorage.getItem("allRides") || "[]"
    );
    this.service.saveData(this.availableRides);
    // console.log("availableRides", this.availableRides);
  }
  saveData(event) {
    event.preventDefault();
    // console.log("rideObj", this.rideObj);
    let flag = false;
    this.rideObj.id = this.availableRides.length + 1;
    for (const i of Object.values(this.rideObj)) {
      if (i === null || i === "" || i === 0) {
        flag = true;
      }
    }
    if (flag) {
      alert("Please fill all the fields.");
    } else {
      // console.log("rideObj", this.rideObj);
      this.availableRides.push(this.rideObj);
      this.service.saveData(this.availableRides);
      window.localStorage.setItem(
        "allRides",
        JSON.stringify(this.availableRides)
      );
      this.reset();
      alert("Data saved successfully");
    }
  }
}
