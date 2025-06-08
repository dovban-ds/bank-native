import {
  COLOR_PRIMARY,
  FONT_DEFAULT_MEDIUM,
  MIDDLE_SPACING,
  SMALL_ITEGER_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  controllersContainer: {
    marginBottom: 32,
    gap: 16,
    paddingHorizontal: MIDDLE_SPACING,
  },
  checkBoxContainer: {
    top: 5,
  },
  checkboxBlock: {
    flexDirection: "row",
    gap: SMALL_ITEGER_SPACING,
    alignItems: "flex-start",
  },
  checkboxTextBlock: {
    flexDirection: "row",
    flex: 1,
  },
  termsText: {
    lineHeight: 22,
    fontFamily: FONT_DEFAULT_MEDIUM,
    pointerEvents: "none",
  },
  termsLink: {
    color: COLOR_PRIMARY,
  },
});
