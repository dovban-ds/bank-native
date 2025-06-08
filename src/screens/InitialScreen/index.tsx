import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import { GestureDetector } from "react-native-gesture-handler";

import { SmallProgressIndicator } from "components/SmallProgressIndicator";
import { ElevatedButton } from "components/ElevatedButton";
import { ProfileHeader } from "components/ProfileHeader";

import { CarouselTabContent } from "./CarouselTabContent";
import { useInitScreen } from "./useInitScreen";
import { style } from "./style";

export const InitialScreen = () => {
  const {
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
  } = useInitScreen();

  return (
    <GestureDetector gesture={panGesture}>
      <SafeAreaView style={style.safeArea}>
        <ProfileHeader
          title=""
          unableGoBack
          additionalHeaderButton={SkipButton}
          additionalHeaderContainer={style.skipButton}
          additionalHeaderAction={skipButtonHandler}
        />
        <View style={style.imageGeneralContainer}>
          <View style={style.imagesCarouselContainer}>
            <Animated.View
              style={[
                style.flexRow,
                {
                  width: SCREEN_WIDTH * imagesContent.length,
                },
                animatedStyle,
              ]}
            >
              {imagesContent.map((image, index) => (
                <View
                  key={index}
                  style={[style.contentCentering, { width: SCREEN_WIDTH }]}
                >
                  {image}
                </View>
              ))}
            </Animated.View>
          </View>
        </View>

        <View style={style.carouselContainer}>
          <Animated.View>
            <View style={style.dynamicContent}>
              <Animated.View
                style={[
                  style.flexRow,
                  {
                    width: SCREEN_WIDTH * tabsContent.length,
                  },
                  animatedStyle,
                ]}
              >
                {tabsContent.map((item, index) => (
                  <View
                    key={index}
                    style={[style.justCenter, { width: SCREEN_WIDTH }]}
                  >
                    <CarouselTabContent
                      title={item.title}
                      subtitle={item.subtitle}
                    />
                  </View>
                ))}
              </Animated.View>
            </View>
          </Animated.View>

          <SmallProgressIndicator
            currentIndex={currentIndex}
            total={tabsContent.length}
          />

          <ElevatedButton
            buttonStyle={style.buttonStyle}
            onPress={handleNext}
            text={buttonText}
          />
        </View>
      </SafeAreaView>
    </GestureDetector>
  );
};
