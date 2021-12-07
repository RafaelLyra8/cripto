import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { DES } from './CriptoComponents/Ciphers';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <DES text="Texto a ser criptografado!"/>
    </View>
  );
}
