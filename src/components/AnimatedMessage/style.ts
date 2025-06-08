import { StyleSheet } from "react-native";

import {
  COLOR_RED,
  FONT_DEFAULT_MEDIUM,
  SMALL_ITEGER_SPACING,
} from "constants/styles";

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
