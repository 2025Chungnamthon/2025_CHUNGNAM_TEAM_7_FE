// src/components/main/HomeMarketCard.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  visited: number;
  tour: number;
  onPress: () => void;
}

export default function HomeMarketCard({
                                         visited,
                                         tour,
                                         onPress,
                                       }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Text style={styles.title}>나의 시장 기록 {' >'}</Text>

      <View style={styles.statsContainer}>
        <Text style={styles.statText}>
          방문시장
          <Text style={styles.statValue}>   {visited}개</Text>
        </Text>

        <Text style={styles.divider}>|</Text>

        <Text style={styles.statText}>
          완료투어
          <Text style={styles.statValue}>   {tour}개</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  statsContainer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  statText: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00C853',
  },
  divider: {
    marginHorizontal: 40,
    color: '#888',
    fontSize: 20,
  },
});
