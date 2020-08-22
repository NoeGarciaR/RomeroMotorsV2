// To parse this data:
//
//   import { Convert, VehicleType } from "./file";
//
//   const vehicleType = Convert.toVehicleType(json);

export interface VehicleType {
  message:         string;
  dataVehicleType: DataVehicleType[];
}

export interface DataVehicleType {
  kind:      string;
  _id:       string;
  value:     string;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
  image:     string;
  id:        string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toVehicleType(json: string): VehicleType {
    return JSON.parse(json);
  }

  public static vehicleTypeToJson(value: VehicleType): string {
    return JSON.stringify(value);
  }
}

