import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  visited: number;
  tour: number;
  onPress: () => void;
}

export default function HomeMarketCard({ visited, tour, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>나의 시장기록 &gt;</Text>
      <Text style={styles.stats}>방문시장 {visited}개 | 원료투어 {tour}개</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  stats: { fontSize: 14, color: '#555' },
});
