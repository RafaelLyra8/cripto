import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';
import {TripleDes} from "data-crypto";

type Props={
    text: string
}

export function TripleDES({text}: Props){
    
    const hex = Buffer.from(text, 'ascii').toString('hex');
    const keyhex = Buffer.from("Chave DES", 'ascii').toString('hex');

    const cipher = TripleDes.encrypt(hex, keyhex);
    const decrypted = TripleDes.decrypt(cipher, keyhex);
    const textAscii = Buffer.from(decrypted, 'hex').toString('ascii');

    return (
        <Text style={styles.text}>
            Texto Criptografado: {cipher}{'\n'}
            Texto Decriptografado: {textAscii}
        </Text>
    );
}