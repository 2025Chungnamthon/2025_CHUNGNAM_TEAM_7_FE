import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>탐색 화면 (지도 표시 예정)</Text>
        </View>
    );
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, text: { fontSize: 24 } });
