import {
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_WHITE_DARK,
  FONT_DEFAULT_MEDIUM,
  LARGE_BORDER_RADIUS,
  MEDIUM_SPACING,
  MIDDLE_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE,
    marginHorizontal: MIDDLE_SPACING,
    marginTop: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderRadius: 10,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 12,
    fontFamily: FONT_DEFAULT_MEDIUM,
    letterSpacing: -0.12,
    color: COLOR_BLACK,
  },
  iconContainer: {
    backgroundColor: COLOR_WHITE_DARK,
    borderRadius: LARGE_BORDER_RADIUS,
    transform: [{ rotate: "180deg" }],
    padding: MEDIUM_SPACING,
  },
});
