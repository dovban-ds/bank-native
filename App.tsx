import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { ToastProvider } from "providers/ToastProvider";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <ActivityIndicator size={"large"} style={styles.loader} />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ToastProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </ToastProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
  },
});
