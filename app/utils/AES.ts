import CryptoJS from "crypto-js";

export const generateAESKey = (): string => {
    return CryptoJS.lib.WordArray.random(32).toString();
};

export const encryptMessage = (message: string, aesKey: string): string => {
    return CryptoJS.AES.encrypt(message, aesKey).toString();
};

export const decryptMessage = (encryptedMessage: string, aesKey: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, aesKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};
