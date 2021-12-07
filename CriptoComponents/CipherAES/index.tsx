import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {Aes} from "data-crypto";

type Props={
    text: string;
    type: number;
}

//Default Props
const defaultProps = {
    text: " ",
    type: 0
};

const AES_CTR = ({texto}: any) => {

    const cipherFinal = encrypt(texto);
    const resultado = decrypt(cipherFinal);

    function encrypt(texto: string){
        
        // Chave de 16 bytes
        var key = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3];

        let textBytes = Buffer.from(texto, "ascii");
        
        // The counter is optional, and if omitted will begin at 1
        let aesCtr = new Aes.ModeOfOperation.ctr(key, new Aes.Counter(5));
        let encryptedBytes = aesCtr.encrypt(textBytes);

        // To print or store the binary data, you may convert it to hex
        let cipher = Buffer.from(encryptedBytes);
        return cipher;
    }

    function decrypt(cipher: any){
        
        // Chave de 16 bytes
        var key = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3];

        // The counter mode of operation maintains internal state, so to
        // decrypt a new instance must be instantiated.
        let aesCtr = new Aes.ModeOfOperation.ctr(key, new Aes.Counter(5));
        
        let decryptedBytes = aesCtr.decrypt(cipher);

        // Convert our bytes back into text
        let textoOriginal = Buffer.from(decryptedBytes).toString("ascii");
        return textoOriginal;
    }
    

    return(
        <Text style={styles.text}>
            Texto Criptografado: {cipherFinal.toString('hex')}{'\n'}
            Texto Decriptografado: {resultado}            
        </Text>
    );
    
}


const AES_CBC = ({texto}: any) => {

    const cipherFinal = encrypt(texto);
    const resultado = decrypt(cipherFinal);

    function encrypt(texto: string){
        // Chave de 16 bytes
        let key = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3];

        // The initialization vector (must be 16 bytes)
        let iv = [64, 23, 4, 14, 82, 39, 56, 40, 8, 19, 83, 53, 39, 57, 92, 62];

        // Convert text to bytes (Precisa ser multiplo de 16 bytes)
        let textBytes = Buffer.from(texto, "ascii");

        let aesCbc = new Aes.ModeOfOperation.cbc(key, iv);
        let encryptedBytes = aesCbc.encrypt(textBytes);

        // To print or store the binary data, you may convert it to hex
        let cipher = Buffer.from(encryptedBytes);
        return cipher;
    }

    function decrypt(cipher: any){
        // Chave de 16 bytes
        let key = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3];

        // The initialization vector (must be 16 bytes)
        let iv = [64, 23, 4, 14, 82, 39, 56, 40, 8, 19, 83, 53, 39, 57, 92, 62];

        // The cipher-block chaining mode of operation maintains internal
        // state, so to decrypt a new instance must be instantiated.
        let aesCbc = new Aes.ModeOfOperation.cbc(key, iv);
        let decryptedBytes = aesCbc.decrypt(cipher);

        // Convert our bytes back into text
        let textoOriginal = Buffer.from(decryptedBytes).toString("ascii");
        return textoOriginal;
    }


    return(
        <Text style={styles.text}>
            Texto Criptografado: {cipherFinal.toString('hex')}{'\n'}
            Texto Decriptografado: {resultado}            
        </Text>
    );
    
}

export function AES({text, type}: Props){

    // Texto para criptografia AES CTR, pode ser de qualquer tamanho.
    
    // Tamanhos de chave: 128-bit (16 bytes), 192-bit (24 bytes) or 256-bit (32 bytes)

    return (
        <View>
            {(type == 0)?<AES_CTR texto={text} />:<AES_CBC texto={text} />}
        </View>
    );
}

AES.defaultProps = defaultProps;