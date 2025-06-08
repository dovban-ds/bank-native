import { ChevronIcon } from "assets/icons/ChevronIcon";
import { Text, View } from "react-native";
import { useUser } from "store/useAuthStore";
import { style } from "./style";
import { TransactionsList } from "./TransactionsList";

const ICON_HEIGHT = 9;
const ICON_WIDTH = 5;

export const TransactionsSection = () => (
  <View style={style.container}>
    <View style={style.header}>
      <Text style={style.headerText}>Recent Transactions</Text>
      <View style={style.iconContainer}>
        <ChevronIcon height={ICON_HEIGHT} width={ICON_WIDTH} />
      </View>
    </View>
    <TransactionsList />
  </View>
);
