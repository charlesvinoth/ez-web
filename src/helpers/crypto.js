import CryptoJs from "crypto-js";

const key = "E~z!0#f$I%^s@1&2*3";

export const encrypt = (data) => {
  const encrypted = CryptoJs.AES.encrypt(JSON.stringify(data), key).toString();
  return JSON.stringify({ encrypted });
};

export const decrypt = (data) => {
  const decrypted = CryptoJs.AES.decrypt(data, key).toString(CryptoJs.enc.Utf8);
  return decrypted && JSON.parse(decrypted);
};
