import React, { ReactNode, useMemo } from "react";
import { Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  SlideInUp,
  SlideOutUp,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { Toast } from "services/toast";
import { ToastParams } from "providers/ToastProvider";
import { SuccessIcon } from "assets/icons/SuccessIcon";
import { InfoIcon } from "assets/icons/InfoIcon";
import { ErrorIcon } from "assets/icons/ErrorIcon";
import { DEFAULT_LOGICAL_VALUE } from "constants/number";

import { style } from "./style";

export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
}

const ENTERING_DELAY = 200;
const ENTERING_DURATION = 800;
const EXITING_DURATION = 1500;
const RESET_POSITION_DURATION = 300;
const SWIPE_THRESHOLD = -80;

export const CustomToast: React.FC<ToastParams> = ({
  message,
  type = ToastType.INFO,
  accessibilityLabel,
}) => {
  const toastProperty = useMemo(() => {
    const ToastProperties: Record<
      ToastType,
      { icon: ReactNode; backgroundColor: string; textColor: string }
    > = {
      [ToastType.SUCCESS]: {
        icon: <SuccessIcon />,
        backgroundColor: "#D1FCE2",
        textColor: "#004322",
      },
      [ToastType.INFO]: {
        icon: <InfoIcon />,
        backgroundColor: "#E7E5FF",
        textColor: "#170435",
      },
      [ToastType.ERROR]: {
        icon: <ErrorIcon />,
        backgroundColor: "#FDE5E6",
        textColor: "#770601",
      },
    };

    return ToastProperties[type];
  }, [accessibilityLabel, type]);

  const translateY = useSharedValue(DEFAULT_LOGICAL_VALUE);

  const swipeUpGesture = useMemo(
    () =>
      Gesture.Pan()
        .onUpdate((event) => {
          if (event.translationY < DEFAULT_LOGICAL_VALUE) {
            translateY.value = event.translationY;
          }
        })
        .onEnd(() => {
          if (translateY.value < SWIPE_THRESHOLD) {
            Toast.hide();
          } else {
            translateY.value = withTiming(DEFAULT_LOGICAL_VALUE, {
              duration: RESET_POSITION_DURATION,
            });
          }
        })
        .runOnJS(true),
    [translateY]
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={swipeUpGesture}>
      <Animated.View
        style={[
          style.toast,
          { backgroundColor: toastProperty.backgroundColor },
          animatedStyle,
        ]}
        entering={SlideInUp.delay(ENTERING_DELAY).duration(ENTERING_DURATION)}
        exiting={SlideOutUp.duration(EXITING_DURATION)}
      >
        {toastProperty.icon}
        <Text style={[style.text, { color: toastProperty.textColor }]}>
          {message}
        </Text>
      </Animated.View>
    </GestureDetector>
  );
};
