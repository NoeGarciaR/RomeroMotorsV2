// To parse this data:
//
//   import { Convert, Manufacturer } from "./file";
//
//   const manufacturer = Convert.toManufacturer(json);

export interface Manufacturer {
  message: string;
  data:    ManufacturerData[];
}

export interface ManufacturerData {
  children?: ManufacturerData[];
  kind:      string;
  _id:       string;
  value:     string;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
  image?:    string;
  id:        string;
  parentId?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toManufacturer(json: string): Manufacturer {
    return JSON.parse(json);
  }

  public static manufacturerToJson(value: Manufacturer): string {
    return JSON.stringify(value);
  }
}
