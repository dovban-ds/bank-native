import {
  BIG_SPACING,
  COLOR_WHITE,
  COLOR_WHITE_BACKGROUND,
  EXTRA_LARGE_BORDER_RADIUS,
  LARGE_BORDER_RADIUS,
  MIDDLE_SPACING,
  SMALL_ITEGER_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";

const DYNAMIC_CONTENT_SIZE = 130;

export const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLOR_WHITE_BACKGROUND,
  },
  skipButton: {
    width: null,
    borderRadius: 16,
    backgroundColor: COLOR_WHITE,
    paddingVertical: SMALL_ITEGER_SPACING,
    paddingHorizontal: 16,
  },
  imageGeneralContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imagesCarouselContainer: {
    overflow: "hidden",
  },
  flexRow: {
    flexDirection: "row",
  },
  contentCentering: {
    justifyContent: "center",
    alignItems: "center",
  },
  justCenter: {
    justifyContent: "center",
  },
  dynamicContent: {
    height: DYNAMIC_CONTENT_SIZE,
    overflow: "hidden",
  },
  buttonStyle: {
    marginHorizontal: BIG_SPACING,
    borderRadius: LARGE_BORDER_RADIUS,
  },
  carouselContainer: {
    backgroundColor: "white",
    borderRadius: EXTRA_LARGE_BORDER_RADIUS,
    paddingTop: 36,
    paddingBottom: BIG_SPACING,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: MIDDLE_SPACING,
  },
});
