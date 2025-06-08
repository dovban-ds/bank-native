import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { ROUTE_ACCOUNT } from "constants/routes";
import { AccountScreen } from "screens/AccountScreen";
import { MainStackParamList } from "models/navigation";

const Stack = createStackNavigator<MainStackParamList>();

export type MainNavigationProp = StackNavigationProp<MainStackParamList>;

export const MainNavigator: React.FC = React.memo(() => {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTE_ACCOUNT} component={AccountScreen} />
    </Stack.Navigator>
  );
});
