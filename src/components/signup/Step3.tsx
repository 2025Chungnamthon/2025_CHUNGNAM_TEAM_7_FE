// src/screens/signup/Step3.tsx

import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { signupAndLogin } from '@/api/authService.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Step3({ navigation }: { navigation: any }) {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);

  const onPressSignUp = useCallback(async () => {
    // 1) 입력 검증
    if (!id || !email || !pw) {
      Alert.alert('모든 필드를 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      const auth = await signupAndLogin({
        username: id,
        email: email,
        password: pw,
      });

      // 예: AsyncStorage 등에 토큰 저장
      await AsyncStorage.setItem('accessToken', auth.accessToken!);
      await AsyncStorage.setItem('refreshToken', auth.refreshToken!);

      navigation.replace('Home');
    } catch (err: any) {
      console.error('회원가입 실패', err);
      Alert.alert(
        '회원가입 실패',
        err.response?.data?.description || err.message || '알 수 없는 오류',
      );
    } finally {
      setLoading(false);
    }
  }, [id, email, pw, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {/* ◆ 1) CONTENT */}
      <View style={styles.content}>
        <Text style={styles.headerTitle}>회원가입</Text>

        <View style={styles.field}>
          <Text style={styles.label}>아이디</Text>
          <TextInput
            style={styles.input}
            placeholder="아이디 입력"
            value={id}
            onChangeText={setId}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>이메일</Text>
          <TextInput
            style={styles.input}
            placeholder="이메일 입력"
            secureTextEntry
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>비밀번호 입력</Text>
          <TextInput
            style={styles.input}
            placeholder="비밀번호 입력"
            secureTextEntry
            value={pw}
            onChangeText={setPw}
          />
        </View>
      </View>

      {/* ◆ 2) BUTTON AT BOTTOM */}
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={onPressSignUp}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {loading ? '잠시만 기다려주세요...' : '가입 완료'}
          </Text>
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

  // 공통 content
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
});
