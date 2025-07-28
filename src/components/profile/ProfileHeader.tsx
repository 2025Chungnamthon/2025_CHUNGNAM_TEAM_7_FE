import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>마이페이지</Text>
      <View style={{ width: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
