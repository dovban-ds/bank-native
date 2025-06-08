import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import * as route from "constants/routes";
import { AuthNavigator } from "./AuthNavigator";
import { MainNavigator } from "./MainNavigator";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Проверка авторизации при запуске
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        initialRouteName={route.AUTH_NAVIGATOR}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={route.AUTH_NAVIGATOR} component={AuthNavigator} />
        <Stack.Screen name={route.MAIN_NAVIGATOR} component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
