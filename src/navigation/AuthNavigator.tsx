import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import * as route from "constants/routes";
import { InitialScreen } from "screens/InitialScreen";
import { LoginScreen } from "screens/LoginScreen";
import { useIsTourCarouselSkipped } from "store/useAuthStore";
import { AuthStackParamList } from "models/navigation";

const Stack = createStackNavigator<AuthStackParamList>();

export type AuthNavigationProp = StackNavigationProp<AuthStackParamList>;

export const AuthNavigator: React.FC = React.memo(() => {
  const isTourSkipped = useIsTourCarouselSkipped();

  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName={isTourSkipped ? route.ROUTE_LOGIN : route.ROUTE_INIT}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={route.ROUTE_INIT}
        component={InitialScreen}
        options={{ animation: "slide_from_left" }}
      />
      <Stack.Screen name={route.ROUTE_LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
});
