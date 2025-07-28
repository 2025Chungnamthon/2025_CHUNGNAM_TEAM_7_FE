// AppNavigator.tsx

import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    SafeAreaView,
    Text,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createBottomTabNavigator,
    BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { TabActions } from '@react-navigation/native';

import LoginScreen from "./screens/LoginScreen.tsx";
import HomeScreen from './screens/HomeScreen';
import QRScannerScreen from './screens/QRScannerScreen';
import GiftScreen from './screens/GiftScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupStack from './screens/SignupStack';
import HomeListScreen from './components/main/HomeListScreen';
import StampMapScreen from './components/stamp/StampMapScreen';
import { Icons } from './ImgIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 첫 화면
function WelcomeScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.center}>
            <Image source={require('./img/logo.png')} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Onb1')}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>다음</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

// 온보딩 공통 컴포넌트
const OnbScreen = ({ navigation, text, next, img }: any) => (
    <SafeAreaView style={styles.onb}>
        <Image source={img} style={styles.img} />

        <Text style={styles.onbText}>{text}</Text>

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(next)}
            activeOpacity={0.8}
        >
            <Text style={styles.buttonText}>다음</Text>
        </TouchableOpacity>
    </SafeAreaView>
);


// 마지막 온보딩
function Onb4({ navigation }: any) {
    return (
        <SafeAreaView style={styles.onb}>
            <Image source={require('./img/onb4.png')} style={styles.img} />

            <Text style={styles.onbText}>
                '도장찍어가유'와 함께{'\n'}시장 탐험을 시작해보세요!
            </Text>

            <Text style={styles.loginText}>
                이미 회원이신가요?{' '}
                <Text
                    style={styles.loginLink}
                    onPress={() => navigation.navigate('Login')}
                >
                    로그인
                </Text>
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Signup')}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, idx) => {
        const focused = state.index === idx;
        const isCenter = route.name === 'QR';
        const src = Icons[route.name as keyof typeof Icons];
        if (!src) return null;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.dispatch(TabActions.jumpTo(route.name))}
            style={[styles.tabButton, isCenter && styles.qrButton]}
            activeOpacity={0.7}
          >
            {isCenter ? (
              <Image
                source={
                  focused
                    ? require('./img/qr-black.png')
                    : require('./img/qr.png')
                }
                style={styles.qrIcon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={src}
                style={[
                  styles.icon,
                  { tintColor: focused ? '#00C853' : 'gray' },
                ]}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// 메인 탭 네비게이터
function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70,
                    backgroundColor: 'transparent',
                    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
                },
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

// 전체 네비게이터
export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen
                name="Onb1"
                component={(props: any) => (
                    <OnbScreen
                        {...props}
                        img={require('./img/onb1.png')}
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
                        img={require('./img/onb2.png')}
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
                        img={require('./img/onb3.png')}
                        text="방문 기록과 시장 트렌드를 한눈에 확인해요!"
                        next="Onb4"
                    />
                )}
            />
            <Stack.Screen name="Onb4" component={Onb4} />

            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupStack} />

            <Stack.Screen name="MainTabs" component={MainTabs} />

            <Stack.Screen
                name="HomeListScreen"
                component={HomeListScreen}
                options={{ title: '시장 기록' }}
            />
            <Stack.Screen
                name="StampMapScreen"
                component={StampMapScreen}
                options={{ title: '스탬프 맵' }}
            />
        </Stack.Navigator>
    );
}

const H_PADDING = 24;
const BUTTON_HEIGHT = 62;
const IMG_SIZE = 400;
const BUTTON_BOTTOM = 40;

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
    title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
    input: { width: '80%', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 12 },
    link: { color: 'blue', marginTop: 12 },

    onb: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: H_PADDING,
    },
    img: {
        width: IMG_SIZE,
        height: IMG_SIZE,
        marginBottom: 24,
        resizeMode: 'contain',
    },
    onbText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 50,
        fontWeight: 'bold',
    },
    button: {
        position: 'absolute',
        bottom: BUTTON_BOTTOM,
        left: H_PADDING,
        right: H_PADDING,
        height: BUTTON_HEIGHT,
        backgroundColor: '#15D057',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    loginText: {
        marginTop: BUTTON_BOTTOM + BUTTON_HEIGHT * 0.1,
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
    },
    loginLink: {
        color: '#00C853',
        fontWeight: '600',
    },

    tabContainer: {
        flexDirection: 'row',
        height: 100,
        borderRadius:18,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    tabButton: {
        width: 50,
        marginBottom:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
  icon: {
    width: 24,
    height: 24,
  },
    qrButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#00C853',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60,
    },
  qrIcon: {
    width: 28,
    height: 28,
  },
});
