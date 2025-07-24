/* src/screens/SignupScreen.js */
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

type SignupProps = {
    navigation:any;
}

export default function SignupScreen({ navigation }: SignupProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        navigation.replace('Main');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
            <Button title="Sign Up" onPress={handleSignup} />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 }, title: { fontSize: 32, marginBottom: 20, textAlign: 'center' }, input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 12 }, link: { marginTop: 16, textAlign: 'center', color: 'blue' },
});