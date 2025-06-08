import { useCallback } from "react";
import { FlatList, Text, View } from "react-native";

import { useUser } from "store/useAuthStore";
import { formatBalance } from "helpers";
import { DEFAULT_LOGICAL_VALUE } from "constants/number";
import { COLOR_GREEN } from "constants/styles";
import { DefaultAvatar } from "components/DefaultAvatar";
import { Transaction } from "models/authModels";

import { style } from "./style";

export const TransactionsList: React.FC = () => {
  const { transactions, currency } = useUser();

  const renderItem = useCallback(
    ({ item }: { item: Transaction }) => (
      <View style={style.itemContainer}>
        <View>
          <DefaultAvatar name={item.name} />
        </View>
        <View style={style.infoBlock}>
          <Text style={style.itemName}>{item.name}</Text>
          <Text style={style.itemSubData}>{`${item.bank} ${item.time}`}</Text>
        </View>
        <View>
          <Text
            style={[
              style.transactionData,
              item.amount > DEFAULT_LOGICAL_VALUE && { color: COLOR_GREEN },
            ]}
          >
            {formatBalance(item.amount, DEFAULT_LOGICAL_VALUE, currency, true)}
          </Text>
        </View>
      </View>
    ),
    []
  );

  const keyExtractor = useCallback(
    (item: Transaction, index: number) =>
      `${item.name}-${item.amount}-${item.time}-${index}`,
    []
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={style.flatList}
      contentContainerStyle={style.flatListContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};
