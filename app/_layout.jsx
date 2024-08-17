import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";
import LoginScreen from './../components/LoginScreen'

export default function RootLayout() {
  useFonts({
    'Bodoni': require('./../assets/fonts/Regular.ttf'),
    'Bodoni-Medium': require('./../assets/fonts/Medium.ttf'),
    'Bodoni-Bold': require('./../assets/fonts/Bold.ttf'),
    'Bodoni-ExtraBold': require('./../assets/fonts/ExtraBold.ttf')

  })
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{
        headerShown:false
        }}>
        <Stack.Screen name="(tabs)" />

        </Stack>
      </SignedIn>

      <SignedOut>
        <LoginScreen/>
      </SignedOut>
    
    </ClerkProvider>
  );
}
