import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeHeader({ username }: { username: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{username} 님</Text>
      <Text style={styles.text2}>오늘은 어떤 여행을 떠나볼까요 ?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 5 },
  text: { fontSize: 24, fontWeight: 'bold' },
  text2: { fontSize: 16, color: '#6E6E6E', marginTop:15 },
});

