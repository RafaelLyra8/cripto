import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AES } from './CriptoComponents/CipherAES';
import { DES } from './CriptoComponents/CipherDes';
import { TripleDES } from './CriptoComponents/CipherTripleDes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DES text="Texto a ser criptografado com DES!"/>
      <TripleDES text="Texto para Triple DES!"/>
      <AES text="Mais uma criptografia, agora com AES CTR!" type={0}/>
      <AES text="Criptografia com AES CBC-16Bytes" type={1}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: 500,
    marginTop: 50,
    marginHorizontal: 20,
    justifyContent: 'space-between'
  }
});