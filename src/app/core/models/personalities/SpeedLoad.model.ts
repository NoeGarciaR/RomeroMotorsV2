// To parse this data:
//
//   import { Convert, SpeedLoad } from "./file";
//
//   const speedLoad = Convert.toSpeedLoad(json);

export interface SpeedLoad {
  message: string;
  data:    Data[];
}

export interface Data {
  kind:      Kind;
  _id:       string;
  indexKind: IndexKind;
  index:     string;
  value:     string;
  id:        string;
}

export enum IndexKind {
  Load = "load",
  Speed = "speed",
}

export enum Kind {
  Index = "Index",
}

// Converts JSON strings to/from your types
export class Convert {
  public static toSpeedLoad(json: string): SpeedLoad {
    return JSON.parse(json);
  }

  public static speedLoadToJson(value: SpeedLoad): string {
    return JSON.stringify(value);
  }
}
export interface SpeedLoadResult {
  load: Data[],
  spped: Data
}
