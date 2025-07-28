import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FooterNote() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>
        스탬프 투어를 통해 지금까지 받은 보상들을 확인해보세요.
        새로운 시장을 방문해 스탬프를 모으면, 더 다양한 보상으로
        교환해보세요!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { backgroundColor: '#fff', padding: 16, margin: 16, borderRadius: 12 },
  text: { fontSize: 12, color: '#888', lineHeight: 18, textAlign: 'center' },
});
