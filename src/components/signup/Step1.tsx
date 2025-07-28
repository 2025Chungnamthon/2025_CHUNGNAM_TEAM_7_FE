// src/screens/signup/Step1.tsx

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Step1({ navigation }: { navigation: any }) {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* ◆ 1) CONTENT */}
      <View style={styles.content}>
        <Text style={styles.headerTitle}>회원가입</Text>

        <View style={styles.field}>
          <Text style={styles.label}>이름</Text>
          <TextInput
            style={styles.input}
            placeholder="이름 입력"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>생년월일</Text>
          <TextInput
            style={styles.input}
            placeholder="생년월일 입력 ex)20050219"
            keyboardType="numeric"
            value={birthday}
            onChangeText={setBirthday}
          />
        </View>
      </View>

      {/* ◆ 2) BUTTON AT BOTTOM */}
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={() => navigation.navigate('Step2')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const H_PADDING = 24;
const BUTTON_HEIGHT = 62;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },

  content: {
    flex: 1,
    paddingHorizontal: H_PADDING,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:40,
    marginBottom: 40,
    color: '#333',
  },
  field: {
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },

  buttonArea: {
    paddingHorizontal: H_PADDING,
    paddingBottom: 6,
  },
  button: {
    width: '100%',
    height: BUTTON_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#00C853',
    borderRadius: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
