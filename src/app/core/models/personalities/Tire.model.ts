export interface Tire {
  message: string;
  data:    Data;
}

export interface Data {
  docs:          Doc[];
  totalDocs:     number;
  limit:         number;
  totalPages:    number;
  page:          number;
  pagingCounter: number;
  hasPrevPage:   boolean;
  hasNextPage:   boolean;
  prevPage:      null;
  nextPage:      null;
}

export interface Doc {
  quantitySold:   number;
  isSet:          boolean;
  freeInst:       boolean;
  loadIndexId:    string[];
  vehicleTypeId:  string[];
  images:         string[];
  visible:        boolean;
  freeShipping:   boolean;
  keywords:       string[];
  kind:           string;
  _id:            string;
  sku:            string;
  upc:            string;
  title:          string;
  stock:          number;
  cost:           Cost;
  speedIndexId:   string;
  manufacturerId: string;
  modelId:        string;
  widthId:        string;
  ratioId:        string;
  diameterId:     string;
  createdAt:      Date;
  updatedAt:      Date;
  desc:           string;
  __v:            number;
  id:             string;
}

export interface Cost {
  base:       number;
  discount:   number;
  percentage: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toTire(json: string): Tire {
    return JSON.parse(json);
  }

  public static welcomeToJson(value: Tire): string {
    return JSON.stringify(value);
  }
}
