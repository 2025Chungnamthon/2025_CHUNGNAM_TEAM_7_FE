import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

type QRProps = {
    navigation: any;
};

export default function QRScannerScreen({ navigation }: QRProps) {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = (result: BarCodeScannerResult) => {
        setScanned(true);
        const { data } = result;
        Alert.alert('스캔된 데이터', data);
    };

    if (hasPermission === null) {
        return <Text>카메라 권한 요청 중...</Text>;
    }
    if (hasPermission === false) {
        return <Text>카메라 접근 권한이 없습니다.</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title="다시 스캔" onPress={() => setScanned(false)} />}
            <Button title="홈으로" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
