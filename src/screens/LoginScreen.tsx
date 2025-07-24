import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
// import { login, LoginParams } from '../api/LoginService.tsx';

export default function LoginScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        navigation.navigate('MainTabs')
        // try {
        //     const result = await login({ email, password } as LoginParams);
        //     if (result.success) {
        //         navigation.replace('Main');
        //     } else {
        //         Alert.alert('로그인 실패', result.message || '알 수 없는 오류');
        //     }
        // } catch (e) {
        //     Alert.alert('에러', '로그인 중 오류가 발생했습니다.');
        // }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
                Don't have an account? Sign up
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 32, marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 12 },
    link: { marginTop: 16, textAlign: 'center', color: 'blue' },
});
