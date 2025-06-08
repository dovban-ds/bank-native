import React, { useEffect } from "react";
import { ErrorOption } from "react-hook-form";
import { Text, ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from "react-native-reanimated";
import { style } from "./style";
import { ErrorIcon } from "assets/icons/ErrorIcon";

type AnimatetMessageProp = {
  error: ErrorOption;
  style?: ViewStyle;
};

export const AnimatedMessage: React.FC<AnimatetMessageProp> = ({
  error,
  style: providedStyles,
}) => {
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(-10);

  useEffect(() => {
    if (error) {
      // Анимация появления с пружинным эффектом
      height.value = withSpring(32, {
        damping: 12,
        stiffness: 100,
      });
      opacity.value = withTiming(1, {
        duration: 250,
        easing: Easing.out(Easing.quad),
      });
      translateY.value = withSpring(5, {
        damping: 12,
        stiffness: 100,
      });
    } else {
      // Анимация исчезновения
      opacity.value = withTiming(0, {
        duration: 200,
        easing: Easing.in(Easing.quad),
      });
      translateY.value = withTiming(-10, { duration: 200 });
      height.value = withTiming(0, {
        duration: 250,
        easing: Easing.in(Easing.quad),
      });
    }
  }, [error]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
    overflow: "hidden",
  }));

  if (!error) return <Animated.View style={[animatedStyle, providedStyles]} />;

  return (
    <Animated.View style={[style.errorBlock, animatedStyle, providedStyles]}>
      <ErrorIcon />
      <Text style={style.hintText}>{error.message}</Text>
    </Animated.View>
  );
};
