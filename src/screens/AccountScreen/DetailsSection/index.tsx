import { COLOR_GREEN } from "constants/styles";
import { useMemo } from "react";
import { Text, View } from "react-native";
import { useUser } from "store/useAuthStore";
import { style } from "./style";
import { formatBalance } from "helpers";

export const DetailsSection = () => {
  const { accountType, availableBalance, currency, dateAdded } = useUser();

  const detailsData = useMemo(
    () => [
      { title: "Type of account", data: "Savings" },
      { title: "Account No", data: accountType },
      {
        title: "Avaliable Balance",
        data: `${currency}${formatBalance(availableBalance)}`,
        color: COLOR_GREEN,
      },
      { title: "Date added", data: dateAdded },
    ],
    [dateAdded, accountType, currency, availableBalance]
  );

  return (
    <View style={style.dataContainer}>
      {detailsData.map((item, index) => (
        <View style={style.itemContainer} key={`${item.title}_${index}`}>
          <Text style={[style.itemTitle, style.itemText]}>{item.title}</Text>
          <Text
            style={[
              style.itemData,
              style.itemText,
              item.color && { color: item.color },
            ]}
          >
            {item.data}
          </Text>
        </View>
      ))}
    </View>
  );
};
