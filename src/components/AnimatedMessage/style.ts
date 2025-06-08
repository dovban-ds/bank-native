import {
  COLOR_RED,
  EXTRA_SMALL_SPACING,
  FONT_DEFAULT_MEDIUM,
  MIDDLE_SPACING,
  SMALL_ITEGER_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  errorBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    gap: SMALL_ITEGER_SPACING,
    flex: 1,
  },
  hintText: {
    color: COLOR_RED,
    fontSize: 13,
    lineHeight: 16,
    fontFamily: FONT_DEFAULT_MEDIUM,
    flex: 1,
  },
});
