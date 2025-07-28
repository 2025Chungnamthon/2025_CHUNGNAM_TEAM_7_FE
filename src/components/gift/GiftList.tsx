import React from 'react';
import {
  View, Text, StyleSheet, FlatList, Image, Dimensions,
} from 'react-native';

const { } = Dimensions.get('window');

export type GiftItem = {
  id: string;
  title: string;
  quantity: number;
  image: any;
};

type Props = {
  data: GiftItem[];
};

export default function GiftList({ data }: Props) {
  const renderItem = ({ item }: { item: GiftItem }) => (
    <View style={styles.row}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.qty}>보유수량 {item.quantity}개</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>보유 상품</Text>
      <FlatList
        data={data}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  header: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  image: { width: 48, height: 48, borderRadius: 8, backgroundColor: '#f0f0f0' },
  textWrap: { marginLeft: 12, flex: 1 },
  title: { fontSize: 14, fontWeight: '500' },
  qty: { fontSize: 12, color: '#00C853', marginTop: 4 },
  sep: { height: 1, backgroundColor: '#eee', marginVertical: 4 },
});
