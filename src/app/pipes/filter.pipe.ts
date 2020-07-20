import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(input: any, args: any) {
    if (args === "") return input;
    let result = [];
    // console.log(input, args);
    result = input.filter((item) => {
      if (
        item.id.toString().toLowerCase().includes(args) ||
        item.empId.toLowerCase().includes(args) ||
        item.vehicleType.toLowerCase().includes(args) ||
        item.vehicleNumber.toLowerCase().includes(args) ||
        item.vacantSeats.toString().toLowerCase().includes(args) ||
        item.time.toLowerCase().includes(args) ||
        item.pickupPoint.toLowerCase().includes(args) ||
        item.destination.toLowerCase().includes(args)
      ) {
        return true;
      } else {
        return false;
      }
    });
    return result;
  }
}
