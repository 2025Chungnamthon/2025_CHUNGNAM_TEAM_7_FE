import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera';
import { Button } from 'react-native/Libraries/Components/Button';

export default function QRScannerScreen({ navigation }: { navigation: any }) {
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    }
  }, []);

  const onBarCodeRead = (e: BarCodeReadEvent) => {
    if (scanned) return;
    setScanned(true);
    Alert.alert('스캔된 데이터', e.data, [
      { text: '확인', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={styles.full}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onBarCodeRead={onBarCodeRead}
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      >
        {/* 사각 가이드 오버레이 */}
        <View style={styles.overlay}>
          <View style={styles.border} />
        </View>
      </RNCamera>
      {scanned && (
        <View style={styles.scanAgain}>
          <Button title="다시 스캔" onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  full: { flex: 1, backgroundColor: '#000' },
  preview: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
  },
  scanAgain: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});
