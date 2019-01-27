import * as CryptoJS from 'crypto-js';

export function encryptText(message: string, key: string) {
        const textEncrypted = CryptoJS.AES.encrypt(message, key);
    return textEncrypted.toString();
}

export function decryptText(message: string, key: string) {
    const textDecrypted = CryptoJS.AES.decrypt(message, key);

    return textDecrypted.toString(CryptoJS.enc.Utf8);
}
