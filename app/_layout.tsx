import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    'Bodoni': require('./../assets/fonts/Regular.ttf'),
    'Bodoni-Medium': require('./../assets/fonts/Medium.ttf'),
    'Bodoni-Bold': require('./../assets/fonts/Bold.ttf'),
    'Bodoni-ExtraBold': require('./../assets/fonts/ExtraBold.ttf')

  })
  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="(tabs)" />

    </Stack>
  );
}
