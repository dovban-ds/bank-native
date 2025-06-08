import { DefaultAccImage } from "assets/images/DefaultAccImage";
import { Text, View } from "react-native";
import { style } from "./style";

export const InfoSection = () => (
  <View style={style.container}>
    <View>
      <DefaultAccImage />
    </View>
    <Text style={style.title}>Kuda Bank</Text>
  </View>
);
