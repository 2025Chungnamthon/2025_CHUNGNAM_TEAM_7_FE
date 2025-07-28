import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Step1 from '../components/signup/Step1';
import Step2 from '../components/signup/Step2';
import Step3 from '../components/signup/Step3';

const Stack = createNativeStackNavigator();

export default function SignupStack() {
  return (
    <Stack.Navigator
      initialRouteName="Step1"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}
    >
      <Stack.Screen name="Step1" component={Step1} options={{ title: '회원가입 - 1/3' }} />
      <Stack.Screen name="Step2" component={Step2} options={{ title: '회원가입 - 2/3' }} />
      <Stack.Screen name="Step3" component={Step3} options={{ title: '회원가입 - 3/3' }} />
    </Stack.Navigator>
  );
}
