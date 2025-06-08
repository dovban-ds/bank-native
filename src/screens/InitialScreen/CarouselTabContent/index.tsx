import { Text, View } from "react-native";

import { style } from "./style";

type CarouselTabContentProps = {
  title: string;
  subtitle: string;
};

export const CarouselTabContent: React.FC<CarouselTabContentProps> = ({
  title,
  subtitle,
}) => (
  <View style={style.contentContainer}>
    <View style={style.textContainer}>
      <Text style={style.title}>{title}</Text>
    </View>
    <View style={style.textContainer}>
      <Text style={style.subtitle}>{subtitle}</Text>
    </View>
  </View>
);
