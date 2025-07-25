// src/screens/signup/Step1.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Step1({ navigation }: { navigation: any }) {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');  // ex) 20050219

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="이름 입력"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.field}>
        <Text>생년월일</Text>
        <TextInput
          style={styles.input}
          placeholder="생년월일 입력 ex)20050219"
          keyboardType="numeric"
          value={birthday}
          onChangeText={setBirthday}
        />
      </View>
      <Button title="다음" onPress={() => navigation.navigate('Step2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:24, backgroundColor:'#fff' },
  field: { marginBottom:32 },
  input: { borderBottomWidth:1, borderColor:'#ccc', paddingVertical:12 },
});
