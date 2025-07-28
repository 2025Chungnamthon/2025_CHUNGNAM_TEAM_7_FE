// src/screens/HomeScreen.tsx

import React from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView, Text,
} from 'react-native';
import Header from '../components/main/HomeHeader';
import Card from '../components/main/HomeMarketCard';
import List from '../components/main/HomeList';

export default function HomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require('../img/home-background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safe}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* 1) 헤더 */}
          <View style={styles.headerWrapper}>
            <Header username="함수" />
          </View>

          {/* 2) 나의 시장 기록 카드 */}
          <View style={styles.cardWrapper}>
            <Card
              visited={0}
              tour={0}
              onPress={() => navigation.navigate('HomeListScreen')}
            />
          </View>

          <Text style={styles.title}>이번주 전통시장</Text>
          {/* 3) 이번주 전통시장 리스트 */}
          <View style={styles.listWrapper}>
            <List
              markets={[
              { id: 1, name: '천안중앙시장',    location: '천안 동남구 사직동', count: 127 },
              { id: 2, name: '성환이화시장',    location: '천안 서북구 성환읍', count: 83  },
              { id: 3, name: '온양온천전통시장', location: '충남 아산시 온천동', count: 54  },
            ]}
              />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const P = 24;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  safe: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    paddingHorizontal: P,
    paddingTop: P+30,
    paddingBottom: P + 60,
    backgroundColor: 'transparent',
  },

  headerWrapper: {
    marginBottom: 70,
  },

  cardWrapper: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    // Android
    elevation: 3,
  },

  listWrapper: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    // Android shadow
    elevation: 3,
  },
});
