// src/screens/signup/Step3.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Step3({ navigation }: { navigation: any }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>아이디</Text>
        <TextInput
          style={styles.input}
          placeholder="아이디 입력"
          value={id}
          onChangeText={setId}
        />
      </View>
      <View style={styles.field}>
        <Text>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 입력"
          secureTextEntry
          value={pw}
          onChangeText={setPw}
        />
      </View>
      <View style={styles.field}>
        <Text>비밀번호 재확인</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 재확인"
          secureTextEntry
          value={pw2}
          onChangeText={setPw2}
        />
      </View>
      <Button title="가입 완료" onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:24, backgroundColor:'#fff' },
  field: { marginBottom:32 },
  input: { borderBottomWidth:1, borderColor:'#ccc', paddingVertical:12 },
});
