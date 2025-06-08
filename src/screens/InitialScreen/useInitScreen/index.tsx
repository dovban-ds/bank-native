import { Image } from "expo-image";
import { useMemo, useState, useCallback } from "react";
import { Gesture, GestureType } from "react-native-gesture-handler";
import {
  AnimatedProps,
  Extrapolation,
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { StackNavigationProp } from "@react-navigation/stack";
import { Dimensions, Text, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  DEFAULT_LOGICAL_VALUE,
  DEFAULT_POSITIVE_VALUE,
} from "constants/number";
import { ROUTE_LOGIN } from "constants/routes";
import { AuthStackParamList } from "models/navigation";
import { useAuthStore } from "store/useAuthStore";

import { style } from "./style";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type TabContent = {
  title: string;
  subtitle: string;
};

type UseInitScreenReturn = {
  imagesContent: React.ReactElement[];
  tabsContent: TabContent[];
  animatedStyle: ViewStyle;
  screenWidth: number;
  panGesture: GestureType;
  currentIndex: SharedValue<number>;
  buttonText: string;
  SkipButton: React.ReactElement;
  skipButtonHandler: () => void;
  handleNext: () => void;
};

export const useInitScreen = (): UseInitScreenReturn => {
  const translateX = useSharedValue(DEFAULT_LOGICAL_VALUE);
  const currentIndex = useSharedValue(DEFAULT_LOGICAL_VALUE);
  const startX = useSharedValue(DEFAULT_LOGICAL_VALUE);

  const [activeIndex, setActiveIndex] = useState(DEFAULT_LOGICAL_VALUE);

  const { setTourCarouselSkipped } = useAuthStore();

  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const tabsContent: TabContent[] = useMemo(
    // data mock
    () => [
      {
        title: "You ought to know where your money goes",
        subtitle:
          "Get an overview of how you are performing and motivate yourself to achieve even more.",
      },
      {
        title: "You ought to know where your money goes",
        subtitle:
          "Get an overview of how you are performing and motivate yourself to achieve even more.",
      },
      {
        title: "You ought to know where your money goes",
        subtitle:
          "Get an overview of how you are performing and motivate yourself to achieve even more.",
      },
      {
        title: "You ought to know where your money goes",
        subtitle:
          "Get an overview of how you are performing and motivate yourself to achieve even more.",
      },
    ],
    []
  );

  const imagesContent = useMemo(
    () => [
      <Image
        key="image-0"
        style={style.image}
        contentFit="contain"
        source={require("assets/images/Onboarding.png")}
      />,
      <Image
        key="image-1"
        style={style.image}
        contentFit="contain"
        source={require("assets/images/Onboarding.png")}
      />,
      <Image
        key="image-2"
        style={style.image}
        contentFit="contain"
        source={require("assets/images/Onboarding.png")}
      />,
      <Image
        key="image-3"
        style={style.image}
        contentFit="contain"
        source={require("assets/images/Onboarding.png")}
      />,
    ],
    []
  );

  const updateIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const panGesture = useMemo(
    () =>
      Gesture.Pan()
        .onStart(() => {
          "worklet";
          startX.value = translateX.value;
        })
        .onUpdate((event) => {
          "worklet";
          translateX.value = startX.value + event.translationX;

          currentIndex.value = interpolate(
            translateX.value,
            [
              -SCREEN_WIDTH * (tabsContent.length - DEFAULT_POSITIVE_VALUE),
              DEFAULT_LOGICAL_VALUE,
            ],
            [
              tabsContent.length - DEFAULT_POSITIVE_VALUE,
              DEFAULT_LOGICAL_VALUE,
            ],
            Extrapolation.CLAMP
          );
        })
        .onEnd((event) => {
          "worklet";
          const shouldGoNext = event.translationX < -SCREEN_WIDTH / 4;
          const shouldGoPrev = event.translationX > SCREEN_WIDTH / 4;

          if (
            shouldGoNext &&
            Math.round(currentIndex.value) <
              tabsContent.length - DEFAULT_POSITIVE_VALUE
          ) {
            const nextIndex =
              Math.round(currentIndex.value) + DEFAULT_POSITIVE_VALUE;
            translateX.value = withSpring(-nextIndex * SCREEN_WIDTH);
            currentIndex.value = withSpring(nextIndex);
            runOnJS(updateIndex)(nextIndex);
          } else if (
            shouldGoPrev &&
            Math.round(currentIndex.value) > DEFAULT_LOGICAL_VALUE
          ) {
            const prevIndex =
              Math.round(currentIndex.value) - DEFAULT_POSITIVE_VALUE;
            translateX.value = withSpring(-prevIndex * SCREEN_WIDTH);
            currentIndex.value = withSpring(prevIndex);
            runOnJS(updateIndex)(prevIndex);
          } else {
            const snapIndex = Math.round(currentIndex.value);
            translateX.value = withSpring(-snapIndex * SCREEN_WIDTH);
            currentIndex.value = withSpring(snapIndex);
          }
        }),
    [tabsContent.length, updateIndex]
  );

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: translateX.value }],
    }),
    []
  );

  const handleNext = useCallback(() => {
    if (activeIndex < tabsContent.length - DEFAULT_POSITIVE_VALUE) {
      const nextIndex = activeIndex + DEFAULT_POSITIVE_VALUE;
      translateX.value = withSpring(-nextIndex * SCREEN_WIDTH);
      currentIndex.value = withSpring(nextIndex);
      updateIndex(nextIndex);
    } else {
      setTourCarouselSkipped(true);
      navigation.navigate(ROUTE_LOGIN);
    }
  }, [activeIndex, tabsContent.length, updateIndex]);

  const buttonText = useMemo(() => {
    if (activeIndex === tabsContent.length - DEFAULT_POSITIVE_VALUE) {
      return "Continue";
    }

    return "Next";
  }, [activeIndex, tabsContent.length]);

  const SkipButton = useMemo(
    () => <Text style={style.skipButton}>Skip</Text>,
    []
  );

  const skipButtonHandler = useCallback(() => {
    setTourCarouselSkipped(true);
    navigation.navigate(ROUTE_LOGIN);
  }, []);

  return useMemo(
    () => ({
      imagesContent,
      tabsContent,
      animatedStyle,
      screenWidth: SCREEN_WIDTH,
      panGesture,
      currentIndex,
      buttonText,
      SkipButton,

      skipButtonHandler,
      handleNext,
    }),
    [
      imagesContent,
      tabsContent,
      animatedStyle,
      panGesture,
      buttonText,
      SkipButton,
      skipButtonHandler,
      handleNext,
    ]
  );
};
