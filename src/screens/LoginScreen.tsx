// screens/LoginScreen.tsx

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
// import { loginService } from '../api/LoginService';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = async () => {
  //   const token = await loginService(username, password);
  //   if (token) navigation.replace('MainTabs');
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>로그인</Text>
      <View style={styles.brand}>
        <Image source={require('../img/logo.png')} style={styles.logoImage} />
      </View>

      {/* 1) formWrapper: inputs + buttons 모두 묶음 */}
      <View style={styles.formWrapper}>
        {/* 입력 폼 */}
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>아이디</Text>
            <TextInput
              style={styles.input}
              placeholder="아이디 입력"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>이메일</Text>
            <TextInput
              style={styles.input}
              placeholder="이메일 입력"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>비밀번호</Text>
            <TextInput
              style={styles.input}
              placeholder="비밀번호 입력"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <View style={styles.signupWrapper}>
          <Text style={styles.footerText}>아직 계정이 없으신가요? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup', { step: 1 })}
            activeOpacity={0.7}
          >
            <Text style={styles.footerLink}>회원가입</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('MainTabs')} //handleLogin
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.kakaoButton]}
          onPress={() => Alert.alert('카카오 로그인 구현 예정')}
          activeOpacity={0.8}
        >
          <Text style={styles.kakaoText}>카카오로 시작하기</Text>
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
  headerTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:40,
    marginBottom: 40,
    color: '#333',
  },
  brand: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  formWrapper: {
    paddingHorizontal: H_PADDING,
    marginBottom: 30,
  },
  form: {
    marginBottom: 32,
  },
  field: {
    marginBottom: 25,
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

  button: {
    width: '100%',
    height: BUTTON_HEIGHT,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: '#00C853',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  kakaoText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },

  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
    marginBottom: 40,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  footerLink: {
    color: '#00C853',
    fontSize: 14,
    fontWeight: '600',
  },
});
