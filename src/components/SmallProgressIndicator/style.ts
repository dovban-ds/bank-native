import { StyleSheet } from "react-native";

import { SMALL_ITEGER_SPACING } from "constants/styles";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 32,
    height: 10,
  },
  progressItem: {
    height: SMALL_ITEGER_SPACING,
    width: SMALL_ITEGER_SPACING,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
