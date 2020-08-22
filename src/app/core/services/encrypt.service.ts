import { Injectable } from "@angular/core";
import * as crypto from "crypto-js";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class EncryptService {
  constructor() {}

  /**
   * encrypt
   */
  public encrypt(toEncrypt: string): string {
    return crypto.AES.encrypt(toEncrypt, environment.keyCrypto).toString();

    // const buffer = Buffer.from(toEncrypt);
    // const encrypted = crypto.privateEncrypt(environment.keyCrypto, buffer);
    // return encrypted.toString("base64");
  }

  /**
   * decrypt
   */
  public decrypt(toDecrypt: string): string {
    return crypto.AES.decrypt(toDecrypt, environment.keyCrypto).toString(crypto.enc.Utf8);
    // return bytes.toString(crypto.enc.Utf8);

    // const buffer = Buffer.from(toDecrypt, "base64");
    // const decrypted = crypto.publicDecrypt(environment.keyCrypto, buffer);
    // return decrypted.toString("utf8");
  }
}
