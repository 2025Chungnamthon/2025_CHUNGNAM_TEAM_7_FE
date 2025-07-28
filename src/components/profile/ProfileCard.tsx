import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  favoriteMarket: string;
  avatar?: any; // require() or URI
};

export default function ProfileCard({ name, favoriteMarket, avatar }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {avatar ? (
          <Image source={avatar} style={styles.avatar} />
        ) : (
          <Icon name="person-circle-outline" size={48} color="#ccc" />
        )}
        <View style={styles.textWrap}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.sub}>
            즐겨찾는 시장 | {favoriteMarket}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Icon name="pencil" size={16} color="#fff" />
        <Text style={styles.buttonText}>프로필 편집</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#f0f0f0' },
  textWrap: { marginLeft: 12 },
  name: { fontSize: 18, fontWeight: '600' },
  sub: { fontSize: 12, color: '#888', marginTop: 4 },
  button: {
    flexDirection: 'row',
    backgroundColor: '#00C853',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', marginLeft: 4, fontSize: 12 },
});
