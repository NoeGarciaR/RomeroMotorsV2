export interface Start {
  message: string;
  data:    Width[];
}

export interface Width {
  children?:  Ratio[];
  kind:      string;
  _id:       string;
  value:     number;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
  id:        string;
}

export interface Ratio {
  children?: Diameter[];
  kind:      string;
  _id:       string;
  value:     number;
  parentId:  string;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
  id:        string;
}

export interface Diameter {
  kind:      string;
  _id:       string;
  value:     number;
  parentId:  string;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
  id:        string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toWidth(json: string): Width {
    return JSON.parse(json);
  }

  public static welcomeToJson(value: Width): string {
    return JSON.stringify(value);
  }
}
