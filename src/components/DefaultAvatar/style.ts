import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHT,
  FONT_DEFAULT_SEMIBOLD,
} from "constants/styles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PRIMARY_LIGHT,
    borderRadius: 100,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  letter: {
    fontFamily: FONT_DEFAULT_SEMIBOLD,
    color: COLOR_PRIMARY,
    includeFontPadding: false,
  },
});
