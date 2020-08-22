// Generated by https://quicktype.io

import { Diameter, Width, Ratio } from "./Measure.model";

export interface Res {
  message: string;
  length: number;
  data: Tire[];
}

export interface Tire {
  cost: Cost;
  vehicleType: Vehicle[];s
  loadIndex: Load[];
  freeInstallation: boolean;
  quantitySold: number;
  isSet: boolean;
  freeShipping: boolean;
  images: any[];
  kind: string;
  _id: string;
  title: string;
  upc: string;
  sku: string;
  stock: number;
  manufacturer: Manufacturer;
  model: Model;
  width: Width;
  ratio: Ratio;
  diameter: Diameter;
  speedIndex: Speed;
  desc: string;
  __v: number;
}

export interface Cost {
  base: number;
  discount: number;
  percentage: number;
}

export interface Load {
  kind: string;
  _id: string;
  indexKind: string;
  index: string;
  value: string;
  id: string;
}

export interface Vehicle {
  kind: string;
  _id: string;
  value: string;
  __v: number;
  id: string;
}

export interface Speed {
  kind: string;
  _id: string;
  indexKind: string;
  index: string;
  value: string;
  id: string;
}

export interface Manufacturer {
  models: string[];
  kind: string;
  _id: string;
  value: string;
  __v: number;
  id: string;
}

export interface Model {
  kind: string;
  _id: string;
  value: string;
  manufacturerId: string;
  __v: number;
  parentId: string;
  id: string;
}
