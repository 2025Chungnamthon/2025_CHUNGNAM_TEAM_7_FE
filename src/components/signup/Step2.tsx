// src/screens/signup/Step2.tsx

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Step2({ navigation }: { navigation: any }) {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* ◆ 1) CONTENT */}
      <View style={styles.content}>
        <Text style={styles.headerTitle}>회원가입</Text>

        <View style={styles.field}>
          <Text style={styles.label}>주소</Text>
          <TextInput
            style={styles.input}
            placeholder="주소 입력"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>전화번호</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="전화번호 입력"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
            <TouchableOpacity style={styles.codeBtn}>
              <Text>인증번호</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>인증번호 입력</Text>
          <TextInput
            style={styles.input}
            placeholder="인증번호 입력"
            keyboardType="numeric"
            value={code}
            onChangeText={setCode}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>이메일</Text>
          <TextInput
            style={styles.input}
            placeholder="이메일 입력"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      {/* ◆ 2) BUTTON AT BOTTOM */}
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={() => navigation.navigate('Step3')}
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

  // Step1과 동일한 content
  content: {
    flex: 1,
    paddingHorizontal: H_PADDING,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
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

  // 공통 버튼 영역
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

  // Step2 전용
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeBtn: {
    marginLeft: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});
