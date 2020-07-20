import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  constructor() {}
  result: any;
  saveData(data) {
    // console.log("data saved successfully", data);
    this.result = data;
  }
  getData() {
    return this.result;
  }
}
