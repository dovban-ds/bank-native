import {
  COLOR_BLACK,
  COLOR_GREY,
  COLOR_PRIMARY,
  COLOR_WHITE_BACKGROUND,
  DEFAULT_SPACING,
  EXTRA_SMALL_SPACING,
  FONT_DEFAULT_BOLD,
  FONT_DEFAULT_MEDIUM,
  MIDDLE_SPACING,
  SMALL_ITEGER_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLOR_WHITE_BACKGROUND,
  },
  titleContainer: {
    // pointerEvents: "box-none",
    marginTop: 36,
    marginBottom: 32,
    paddingHorizontal: MIDDLE_SPACING,
    gap: SMALL_ITEGER_SPACING,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: FONT_DEFAULT_BOLD,
    color: COLOR_PRIMARY,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FONT_DEFAULT_MEDIUM,
    color: COLOR_GREY,
  },
  footerBlock: {
    gap: 32,
    paddingHorizontal: 16,
    paddingBottom: DEFAULT_SPACING,
  },
  footerInfoBlock: {
    flexDirection: "row",
    justifyContent: "center",
    gap: EXTRA_SMALL_SPACING,
  },
  footerText: {
    lineHeight: 22,
    color: COLOR_BLACK,
    fontFamily: FONT_DEFAULT_MEDIUM,
  },
  footerLink: {
    color: COLOR_PRIMARY,
  },
});
