import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeList({ markets }: { markets: string[] }) {
  return (
    <View>
      <Text style={styles.title}>이번주 전통시장</Text>
      {markets.map((market, index) => (
        <Text key={index} style={styles.item}>
          {index + 1}. {market}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  item: { fontSize: 16, marginBottom: 8 },
});
