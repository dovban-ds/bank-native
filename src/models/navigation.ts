import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreenProps } from "@react-navigation/stack";

// export type RootStackParamList = {
//   AuthNavigator: undefined;
//   MainNavigator: undefined;
// };

export type RootStackParamList = {
  AuthNavigator: NavigatorScreenParams<AuthStackParamList>;
  MainNavigator: NavigatorScreenParams<MainStackParamList>;
};

export type AuthStackParamList = {
  ROUTE_INIT: undefined;
  ROUTE_LOGIN: undefined;
};

export type MainStackParamList = {
  ROUTE_ACCOUNT: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, Screen>;

export type MainStackScreenProps<Screen extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, Screen>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
