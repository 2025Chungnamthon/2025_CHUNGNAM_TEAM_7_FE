import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FloatingQRButton() {
    const navigation:any = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('QRScannerScreen')}>
                <FontAwesome name="qrcode" size={28} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', marginVertical: 20 },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});