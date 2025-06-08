import {
  COLOR_GREY,
  COLOR_PRIMARY,
  DEFAULT_SPACING,
  FONT_DEFAULT_BOLD,
  FONT_DEFAULT_MEDIUM,
  VERY_BIG_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  contentContainer: {
    marginHorizontal: VERY_BIG_SPACING,
    gap: DEFAULT_SPACING,
  },
  title: {
    fontFamily: FONT_DEFAULT_BOLD,
    color: COLOR_PRIMARY,
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  textContainer: {
    width: "100%",
    marginHorizontal: -20,
  },
  subtitle: {
    fontFamily: FONT_DEFAULT_MEDIUM,
    color: COLOR_GREY,
    textAlign: "center",
  },
});
