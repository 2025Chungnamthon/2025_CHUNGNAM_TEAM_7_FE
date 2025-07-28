import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/main/HomeHeader';
import Card from '../components/main/HomeMarketCard';
import List from '../components/main/HomeList';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header username="함수" />
      <Card
        visited={0}
        tour={0}
        onPress={() => navigation.navigate('HomeListScreen')}
      />
      <List markets={['남대문시장', '통인시장', '광장시장']} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 80, backgroundColor: '#fff' },
});
