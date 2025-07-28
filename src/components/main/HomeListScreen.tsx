import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StampInfo from '../stamp/StampInfo.tsx';

const markets = [
  { name: '천안중앙시장', address: '충남 천안시 동남구 사직로 7', stamp: '3 / 11' },
  { name: '성정시장', address: '충남 천안시 서북구 성정로', stamp: '5 / 12' },
  { name: '온양온천전통시장', address: '충남 아산시 온천동 102-11', stamp: '4 / 15' },
  { name: '둔포전통시장', address: '충남 아산시 둔포면 둔포리', stamp: '2 / 9' },
];

export default function HomeListScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={markets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <StampInfo
            name={item.name}
            address={item.address}
            stamp={item.stamp}
            onPressStamp={() =>
              navigation.navigate('StampMapScreen', { marketName: item.name })
            }
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
});
