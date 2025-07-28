import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://hamsu.kr/Map' }}
        style={styles.webview}
        onLoad={() => console.log("✅ WebView loaded")}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('❌ WebView error: ', nativeEvent);
        }}
        onMessage={(event) => {
          console.log('📦 Web message:', event.nativeEvent.data);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
});
