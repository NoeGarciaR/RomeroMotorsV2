export interface Ratio {
  diameters: Diameter[];
  kind: string;
  _id: string;
  value: number;
  widthId: string;
}

export interface Diameter {
  ratios?: Ratio[];
  kind: string;
  _id: string;
  value: number;
  ratioId?: string;
}

export interface Width {
  ratios?: Ratio[];
  kind: string;
  _id: string;
  value: number;
}
