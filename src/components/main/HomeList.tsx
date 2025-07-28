// src/components/main/HomeList.tsx

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';

interface Market {
  id: number;
  name: string;
  location: string;
  count: number;
}

const MarketIcons: Record<number, number> = {
  1: require('../../img/1.png'),
  2: require('../../img/2.png'),
  3: require('../../img/3.png'),
};

export default function HomeList({ markets }: { markets: Market[] }) {
  return (
    <View>

      <FlatList
        data={markets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* 1) 왼쪽 아이콘 */}
            <Image source={MarketIcons[item.id]} style={styles.icon} />

            {/* 2) 중간 정보 */}
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>

            {/* 3) 우측 횟수 */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.count}회</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 24,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    // Android elevation
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  location: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#00C853',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
