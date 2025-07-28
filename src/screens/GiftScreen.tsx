import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GiftHeader from '../components/gift/GiftHeader';
import GiftMainCard from '../components/gift/GiftMainCard';
import GiftList, { GiftItem } from '../components/gift/GiftList';
import GiftFooter from '../components/gift/GiftFooter';

const gifts: GiftItem[] = [
  {
    id: '1',
    title: '온누리상품권 5000원권',
    quantity: 3,
    image: require('../img/5000.png'),
  },
  {
    id: '2',
    title: '온누리상품권 10000원권',
    quantity: 1,
    image: require('../img/10000.png'),
  },
];

export default function GiftScreen() {
  const total = gifts.reduce((s, g) => s + g.quantity, 0);

  return (
    <SafeAreaView style={styles.container}>
      <GiftHeader />

      <GiftMainCard totalCount={total} />

      <GiftList data={gifts} />

      <GiftFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa' },
});
