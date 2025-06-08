import { View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { COLOR_DISABLED, COLOR_PRIMARY } from "constants/styles";
import {
  DEFAULT_LOGICAL_VALUE,
  DEFAULT_POSITIVE_VALUE,
} from "constants/number";

import { style } from "./style";

export const SmallProgressIndicator: React.FC<{
  currentIndex: SharedValue<number>;
  total: number;
}> = ({ currentIndex, total }) => {
  return (
    <View style={style.container}>
      {Array.from({ length: total }).map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          const isActive = interpolate(
            currentIndex.value,
            [
              index - DEFAULT_POSITIVE_VALUE,
              index,
              index + DEFAULT_POSITIVE_VALUE,
            ],
            [
              DEFAULT_LOGICAL_VALUE,
              DEFAULT_POSITIVE_VALUE,
              DEFAULT_LOGICAL_VALUE,
            ],
            Extrapolation.CLAMP
          );

          const height = interpolate(
            isActive,
            [DEFAULT_LOGICAL_VALUE, DEFAULT_POSITIVE_VALUE],
            [8, 24],
            Extrapolation.CLAMP
          );

          const opacity = interpolate(
            isActive,
            [DEFAULT_LOGICAL_VALUE, DEFAULT_POSITIVE_VALUE],
            [0.3, DEFAULT_POSITIVE_VALUE],
            Extrapolation.CLAMP
          );

          return {
            height: withSpring(height),
            opacity: withSpring(opacity),
            backgroundColor: withSpring(
              isActive > 0.5 ? COLOR_PRIMARY : COLOR_DISABLED
            ),
          };
        });

        return (
          <Animated.View
            key={index}
            style={[style.progressItem, animatedStyle]}
          />
        );
      })}
    </View>
  );
};
