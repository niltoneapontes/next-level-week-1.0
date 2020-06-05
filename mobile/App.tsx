import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold, 
    Roboto_400Regular, 
    Roboto_500Medium,
  });

  // if(!fontsLoaded){
  //   return <AppLoading />
  // }
  
  return (
// Fragment: "< >" semelhante a uma "<View>" que não possui valor visual, mas possui valor estrutural
    <> 
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes />
    </>
  );
}
