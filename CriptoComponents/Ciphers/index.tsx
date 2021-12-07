import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';
import {Des} from "data-crypto";

type Props={
    text: string
}

export function DES({text}: Props){
    
    const hex = Buffer.from(text, 'ascii').toString('hex');
    const keyhex = Buffer.from("Chave DES", 'ascii').toString('hex');

    const cipher = Des.encrypt(hex, keyhex);
    const decrypted = Des.decrypt(cipher, keyhex);
    const textAscii = Buffer.from(decrypted, 'hex').toString('ascii');

    return (
        <Text style={styles.text}>
            {textAscii}
        </Text>
    );
}