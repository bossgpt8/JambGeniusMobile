import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/stack';
import PracticeScreen from '../screens/PracticeScreen';
import ExamScreen from '../screens/ExamScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatroomScreen from '../screens/ChatroomScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PracticeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PracticeHome" component={PracticeScreen} />
    </Stack.Navigator>
  );
}

function ExamStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ExamHome" component={ExamScreen} />
    </Stack.Navigator>
  );
}

export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';
          if (route.name === 'Practice') iconName = 'pencil';
          else if (route.name === 'Exam') iconName = 'file-document';
          else if (route.name === 'Chat') iconName = 'chat';
          else if (route.name === 'Profile') iconName = 'account';
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#9ca3af',
      })}>
      <Tab.Screen name="Practice" component={PracticeStack} />
      <Tab.Screen name="Exam" component={ExamStack} />
      <Tab.Screen name="Chat" component={ChatroomScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
