import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform, SafeAreaView, Text, TextInput, Button, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBarProps, } from '@react-navigation/bottom-tabs';
import { TabActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen.tsx';
import QRScannerScreen from './screens/QRScannerScreen.tsx';
import GiftScreen from './screens/GiftScreen.tsx';
import MapScreen from './screens/MapScreen.tsx';
import ProfileScreen from './screens/ProfileScreen.tsx';
import SignupStack from './screens/SignupStack.tsx';
import HomeListScreen from './components/main/HomeListScreen.tsx';
import StampMapScreen from './components/stamp/StampMapScreen.tsx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ICONS: Record<string, string> = {
  Home: 'home-outline',
  Search: 'search-outline',
  QR: 'qr-code-outline',
  Gift: 'gift-outline',
  Profile: 'person-outline',
};

function LoginScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Onb1')} />
      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
      </Text>
    </SafeAreaView>
  );
}

const OnbScreen = ({ navigation, text, next, }: {
  navigation: any;
  text: string;
  next: string;
}) => (
  <View style={styles.onb}>
    <Text style={styles.onbText}>{text}</Text>
    <Button title="다음" onPress={() => navigation.navigate(next)} />
  </View>
);

function Onb4({ navigation }: { navigation: any }) {
  return (
    <View style={styles.onb}>
      <Text style={styles.onbText}>‘도장찍고가유’ 시작!</Text>
      <Button title="시작하기" onPress={() => navigation.navigate('MainTabs')} />
    </View>
  );
}

function CustomTabBar({ state, navigation, }: BottomTabBarProps & { navigation: any }) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((r, i) => {
        const focused = state.index === i;
        const isCenter = r.name === 'QR';
        return (
          <TouchableOpacity key={r.key} onPress={() => !focused && navigation.dispatch(TabActions.jumpTo(r.name))}
            style={[styles.tabButton, isCenter && styles.qrButton]}>
            <Icon
              name={ICONS[r.name] || 'help-outline'}
              size={isCenter ? 28 : 22}
              color={focused ? '#00C853' : 'gray'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#00C853',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 70, backgroundColor: '#fff' },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={MapScreen} />
      <Tab.Screen name="QR" component={QRScannerScreen} />
      <Tab.Screen name="Gift" component={GiftScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Auth */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupStack} />

      <Stack.Screen name="HomeListScreen" component={HomeListScreen} options={{ title: '시장 기록' }} />

      <Stack.Screen name="StampMapScreen" component={StampMapScreen} options={{ title: '스탬프 맵' }} />

      <Stack.Screen
        name="Onb1"
        component={(props: any) => (
          <OnbScreen
            {...props}
            text="시장 곳곳의 QR을 스캔하고, 스탬프를 모아보세요!"
            next="Onb2"
          />
        )}
      />
      <Stack.Screen
        name="Onb2"
        component={(props: any) => (
          <OnbScreen
            {...props}
            text="적립한 스탬프로 상품권과 쿠폰을 교환해요!"
            next="Onb3"
          />
        )}
      />
      <Stack.Screen
        name="Onb3"
        component={(props: any) => (
          <OnbScreen
            {...props}
            text="방문 기록과 시장 트렌드를 한눈에 확인해요!"
            next="Onb4"
          />
        )}
      />
      <Stack.Screen name="Onb4" component={Onb4} />

      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}



const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: { width: '80%', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 12 },
  link: { color: 'blue', marginTop: 12 },
  onb: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 24 },
  onbText: { fontSize: 18, textAlign: 'center', marginBottom: 24 },
  tabContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  tabButton: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  qrButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 25 : 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00C853',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
});
