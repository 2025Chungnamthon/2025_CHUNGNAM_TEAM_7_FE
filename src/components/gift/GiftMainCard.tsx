import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = { totalCount: number };

export default function GiftMainCard({ totalCount }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        보유상품 <Text style={styles.count}>{totalCount}개</Text>
      </Text>
      <Image source={require('../../img/gift-maincard.png')} />
      <Text style={styles.sub}>
        스탬프를 통해 교환한 상품을 보관하고 있어요
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16, borderRadius: 12, backgroundColor: '#fff', padding: 20,
    alignItems: 'center', position: 'relative',
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }, elevation: 3,
  },
  text: { fontSize: 20, fontWeight: '500' },
  count: { color: '#00C853', fontWeight: '700' },
  sub: { fontSize: 12, color: '#888', marginTop: 4, textAlign: 'center' },
  icon: { position: 'absolute', right: 20, bottom: 20, opacity: 0.3 },
});
