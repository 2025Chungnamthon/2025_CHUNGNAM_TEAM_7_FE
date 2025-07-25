// src/screens/signup/Step2.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Step2({ navigation }: { navigation: any }) {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>주소</Text>
        <TextInput
          style={styles.input}
          placeholder="주소 입력"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.field}>
        <Text>전화번호</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, {flex:1}]}
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
        <Text>인증번호 입력</Text>
        <TextInput
          style={styles.input}
          placeholder="인증번호 입력"
          keyboardType="numeric"
          value={code}
          onChangeText={setCode}
        />
      </View>
      <View style={styles.field}>
        <Text>이메일</Text>
        <TextInput
          style={styles.input}
          placeholder="이메일 입력"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Button title="다음" onPress={() => navigation.navigate('Step3')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:24, backgroundColor:'#fff' },
  field: { marginBottom:24 },
  row: { flexDirection:'row', alignItems:'center' },
  input: { borderBottomWidth:1, borderColor:'#ccc', paddingVertical:12 },
  codeBtn: {
    marginLeft:12, paddingVertical:12, paddingHorizontal:16,
    borderWidth:1, borderColor:'#ccc', borderRadius:8,
  },
});
