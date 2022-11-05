import { View } from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import IntroScreen from '../screens/IntroScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword'

const Stack = createNativeStackNavigator()

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Intro'>
        <Stack.Screen name='Intro' options={{headerShown: false}} component={IntroScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Signup' component={SignupScreen}/>
        <Stack.Screen name='Forgot' component={ForgotPasswordScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation