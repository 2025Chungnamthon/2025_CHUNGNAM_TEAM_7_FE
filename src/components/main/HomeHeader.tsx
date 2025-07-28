import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeHeader({ username }: { username: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{username}님</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 24 },
  text: { fontSize: 24, fontWeight: 'bold' },
});
