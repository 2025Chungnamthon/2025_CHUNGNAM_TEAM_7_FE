import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type Market = {
  name: string;
  stampCount: number;
  totalStampCount: number;
};

type Props = {
  market: Market;
  onClose: () => void;
};

export default function MapMarketInfo({ market, onClose }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.sheet, { paddingBottom: insets.bottom + 16 }]}>
      <View style={styles.handle} />

      <View style={styles.headerRow}>
        <View>
          <Text style={styles.name}>{market.name}</Text>
          <Text style={styles.stamp}>
            스탬프 {market.stampCount}/{market.totalStampCount}
          </Text>
        </View>
        <TouchableOpacity onPress={onClose}>
          <Icon name="close" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.featuresRow}>
        <Icon name="cafe-outline" size={24} />
        <Icon name="elevator-outline" size={24} />
        <Icon name="cart-outline" size={24} />
        <Icon name="archive-outline" size={24} />
        <Icon name="car-outline" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: { fontSize: 18, fontWeight: '600' },
  stamp: { color: '#00C853', marginTop: 4 },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    paddingHorizontal: 20,
  },
});
