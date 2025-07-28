import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const stamps = [
  { label: 'START', collected: true },
  { label: '가온길', collected: true },
  { label: '가시내음', collected: true },
  { label: '스탬프를\n수집해보세요', collected: false },
  { label: '?', collected: false },
  { label: '?', collected: false },
  { label: '?', collected: false },
  { label: '?', collected: false },
  { label: '?', collected: false },
  { label: '?', collected: false },
  { label: '?', collected: false },
];

export default function StampMapScreen({ route }: { route: any }) {
  const { marketName } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>스탬프 투어</Text>
      <Text style={styles.market}>{marketName}</Text>
      <Text style={styles.subtitle}>스탬프를 모아 상품으로 교환해보세요</Text>

      <View style={styles.mapWrapper}>
        {stamps.map((item, index) => (
          <View
            key={index}
            style={[
              styles.stampBox,
              index % 2 === 1 ? styles.alignRight : styles.alignLeft,
              item.collected ? styles.collected : styles.uncollected,
            ]}
          >
            <Text style={styles.stampText}>{item.collected ? item.label : '?'}</Text>
          </View>
        ))}
      </View>

      <View style={styles.reward}>
        <Image
          style={styles.rewardImg}
          resizeMode="contain"
        />
        <Text style={styles.rewardText}>‘온누리 상품권 500원권’으로{'\n'}교환가능해요!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 18, textAlign: 'center', marginBottom: 8 },
  market: { fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { textAlign: 'center', color: '#888', marginBottom: 24 },

  mapWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 24,
    marginBottom: 32,
  },
  stampBox: {
    width: 120,
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  alignLeft: { alignSelf: 'flex-start' },
  alignRight: { alignSelf: 'flex-end' },

  collected: {
    backgroundColor: '#00C853',
  },
  uncollected: {
    backgroundColor: '#eee',
  },
  stampText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  reward: {
    alignItems: 'center',
    marginBottom: 40,
  },
  rewardImg: {
    width: 140,
    height: 60,
    marginBottom: 8,
  },
  rewardText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
