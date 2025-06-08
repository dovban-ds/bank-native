import { Text, View } from "react-native";
import { style } from "./style";

export const DefaultAvatar: React.FC<{ name: string }> = ({ name }) => (
  <View style={style.container}>
    <Text style={style.letter}>{name[0]}</Text>
  </View>
);
