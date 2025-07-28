import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  name: string;
  address: string;
  stamp: string;
  onPressStamp: () => void;
}

export default function StampInfo({ name, address, stamp, onPressStamp }: Props) {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <TouchableOpacity style={styles.stampButton} onPress={onPressStamp}>
        <Text style={styles.stampText}>스탬프 {stamp}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: { fontSize: 16, fontWeight: 'bold' },
  address: { fontSize: 13, color: '#666', marginTop: 4 },
  stampButton: {
    backgroundColor: '#00C853',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  stampText: { color: '#fff', fontSize: 13 },
});
