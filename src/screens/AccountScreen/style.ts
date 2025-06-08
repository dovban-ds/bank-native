import { StyleSheet } from "react-native";

import { DEFAULT_SPACING } from "constants/styles";

export const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: DEFAULT_SPACING,
  },
});
