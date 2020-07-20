import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Ride } from "../rides.interface";
import { SharedService } from "../services/share.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: Array<Ride>;
  @Input() showAction: boolean;
  tabs: Array<string>;
  input: string;
  bookingDetails: Array<any>;
  availableRides: Array<Ride>;
  constructor(private service: SharedService) {
    this.tabs = [
      "Id",
      "Employee ID",
      "Vehicle Type",
      "Vehicle Number",
      "Vacant Seats",
      "Pick up time",
      "Pick up point",
      "Destination",
    ];
    this.input = "";
    this.bookingDetails = [];
    this.availableRides = [];
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    this.data = changes.data.currentValue;
  }
  ngOnInit() {
    // console.log("availableRides", this.data);
    // console.log("showAction tab", this.showAction);
    if (this.showAction) {
      this.availableRides = this.service.getData() || [];
      if (this.availableRides.length === 0) {
        this.availableRides = JSON.parse(
          window.localStorage.getItem("allRides") || "[]"
        );
      }
    }
  }
  getBookingInfo() {
    this.bookingDetails = JSON.parse(
      window.localStorage.getItem("bookingInfo") || "[]"
    );
  }
  bookRide(item) {
    if (item.vacantSeats === 0) {
      alert("No seats available");
    } else {
      const empId = window.prompt("Enter your employee ID: ");
      // console.log("Your emp id is " + empId);
      if (empId !== null) {
        if (item.empId === empId) {
          alert("You are the owner of this ride");
        } else {
          this.getBookingInfo();
          if (this.bookingDetails.length !== 0) {
            const isBooked = this.bookingDetails.find(
              (res) => res.empId === empId
            );
            // console.log(isBooked);
            if (isBooked) {
              alert("You have already booked a ride");
            } else {
              this.saveData(empId, item);
            }
          } else {
            this.saveData(empId, item);
          }
        }
      }
    }
  }
  saveData(empId, item) {
    let bookingInfo = {
      empId,
      rideId: item.id,
    };
    this.bookingDetails.push(bookingInfo);
    window.localStorage.setItem(
      "bookingInfo",
      JSON.stringify(this.bookingDetails)
    );
    const index = this.availableRides.findIndex((ride) => ride.id === item.id);
    this.availableRides[index].vacantSeats -= 1;
    window.localStorage.setItem(
      "allRides",
      JSON.stringify(this.availableRides)
    );
    alert("Ride booked successfully");
    location.reload();
  }
}
