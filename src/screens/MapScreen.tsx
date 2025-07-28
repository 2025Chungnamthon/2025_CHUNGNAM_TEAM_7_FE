// screens/MapScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import MapHeader from '../components/map/MapHeader';
import MapMarketInfo, { Market } from '../components/map/MapMarketInfo';

export default function MapScreen({ navigation }: any) {
  const [searchText, setSearchText] = useState('');
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);

  // 🚧 더미 데이터로 시트 미리보기
  useEffect(() => {
    const dummy: Market = {
      name: '천안중앙시장',
      stampCount: 3,
      totalStampCount: 11,
    };
    // 1초 뒤에 더미로 띄워보기
    const t = setTimeout(() => setSelectedMarket(dummy), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <MapHeader
        title="시장 찾기"
        searchValue={searchText}
        onSearch={setSearchText}
        onBack={() => navigation.goBack()}
      />

      <View style={styles.webviewWrapper}>
        <WebView
          source={{ uri: 'http://hamsu.kr/Map' }}
          style={{ flex: 1 }}
          onMessage={(e) => {
            try {
              const data = JSON.parse(e.nativeEvent.data) as Market;
              setSelectedMarket(data);
            } catch {}
          }}
        />
      </View>

      {/* 더미 테스트용 버튼 (원한다면 지워도 OK) */}
      <Button
        title="--> 마켓 정보 보기"
        onPress={() =>
          setSelectedMarket({
            name: '천안두정시장',
            stampCount: 5,
            totalStampCount: 12,
          })
        }
      />

      {selectedMarket && (
        <MapMarketInfo
          market={selectedMarket}
          onClose={() => setSelectedMarket(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webviewWrapper: { flex: 1 },
});
