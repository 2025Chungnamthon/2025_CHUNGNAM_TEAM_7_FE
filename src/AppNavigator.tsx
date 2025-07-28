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
    TextInput,
    Button,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createBottomTabNavigator,
    BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { TabActions } from '@react-navigation/native';

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
            <Text style={styles.title}>도장찍어가유</Text>
            <Button title="다음" onPress={() => navigation.navigate('Onb1')} />
        </SafeAreaView>
    );
}

// 로그인 화면
function LoginScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.center}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <Button title="Login" onPress={() => navigation.replace('MainTabs')} />
            <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
                회원가입 하러 가기
            </Text>
        </SafeAreaView>
    );
}

// 온보딩 공통 컴포넌트
const OnbScreen = ({ navigation, text, next }: any) => (
    <View style={styles.onb}>
        <Text style={styles.onbText}>{text}</Text>
        <Button title="다음" onPress={() => navigation.navigate(next)} />
    </View>
);

// 마지막 온보딩
function Onb4({ navigation }: any) {
    return (
        <View style={styles.onb}>
            <Text style={styles.onbText}>모든 준비가 끝났어요!</Text>
            <Button title="회원가입" onPress={() => navigation.navigate('Signup')} />
            <View style={{ height: 12 }} />
            <Button title="로그인" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: any, idx: number) => {
                const focused = state.index === idx;
                const isCenter = route.name === 'QR';
                const src = Icons[route.name as keyof typeof Icons];
                if (!src) return null;

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={() =>
                            navigation.dispatch(TabActions.jumpTo(route.name))
                        }
                        style={[styles.tabButton, isCenter && styles.qrButton]}
                        activeOpacity={0.7}
                    >
                        <Image
                            source={src}
                            style={{
                                width: isCenter ? 32 : 24,
                                height: isCenter ? 32 : 24,
                                tintColor: focused ? '#00C853' : 'gray',
                                resizeMode: 'contain',
                            }}
                        />
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
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    tabButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#00C853',
        alignItems: 'center',
        justifyContent: 'center',
        // 탭바 위로 조금 띄우기
        marginTop: -20,
    },
});
