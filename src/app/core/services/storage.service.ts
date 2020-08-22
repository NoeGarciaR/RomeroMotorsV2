import { Injectable } from "@angular/core";
import * as crypto from "crypto-js";
import {
  StorageMap,
  LocalDatabase,
  JSONValidator
} from "@ngx-pwa/local-storage";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  
  constructor(private readonly _storage: StorageMap) {}
}
