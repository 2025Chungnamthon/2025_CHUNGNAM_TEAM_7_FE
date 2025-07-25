import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>도장찍고가유</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="아이디 입력"
          value={id}
          onChangeText={setId}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호 입력"
          secureTextEntry
          value={pw}
          onChangeText={setPw}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.loginButton]}
        onPress={() => navigation.navigate('SignupStack')}
      >
        <Text style={styles.loginText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.kakaoButton]}
        onPress={() => {/* 카카오 로그인 */}}
      >
        <Text style={styles.kakaoText}>kakao로 로그인</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>아직 계정이 없으신가요? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupStack', { step: 1 })}>
          <Text style={styles.linkText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:24, justifyContent:'center', backgroundColor:'#fff' },
  logo: { fontSize:24, textAlign:'center', marginBottom:60 },
  form: { marginBottom:32 },
  input: {
    borderBottomWidth:1, borderColor:'#ccc', paddingVertical:12, marginBottom:24,
    fontSize:16,
  },
  button: {
    height:50, borderRadius:12, justifyContent:'center', alignItems:'center', marginBottom:16,
  },
  loginButton: { backgroundColor:'#00C853' },
  loginText: { color:'#fff', fontSize:16 },
  kakaoButton: { backgroundColor:'#FEE500' },
  kakaoText: { color:'#000', fontSize:16 },
  footer: { flexDirection:'row', justifyContent:'center', marginTop:16 },
  linkText: { color:'#00C853' },
});
