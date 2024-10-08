import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";
import LoginScreen from './../components/LoginScreen'
import * as SecureStore from 'expo-secure-store'
import LocationContext from './../context/Location'
import { useState } from "react";

const tokenCache={
  async getToken(key){
    try{
      return SecureStore.getItemAsync(key);
    }catch(err){
      return null;
    }
  },
  async saveToken(key,value){
    try{
      return SecureStore.setItemAsync(key,value);
    }catch(err){
      return;
    }
  },
};


export default function RootLayout() {
  useFonts({
    'Bodoni': require('./../assets/fonts/Regular.ttf'),
    'Bodoni-Medium': require('./../assets/fonts/Medium.ttf'),
    'Bodoni-Bold': require('./../assets/fonts/Bold.ttf'),
    'Bodoni-ExtraBold': require('./../assets/fonts/ExtraBold.ttf')

  })

  const [locationData,setLocationData]=useState([])
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <LocationContext.Provider value={{locationData,setLocationData}}>
        <Stack screenOptions={{
        headerShown:false
        }}>
        <Stack.Screen name="(tabs)" />

        </Stack>
        </LocationContext.Provider>
      </SignedIn>

      <SignedOut>
        <LoginScreen/>
      </SignedOut>
    
    </ClerkProvider>
  );
}
