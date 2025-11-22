import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import {ActivityIndicator, View} from 'react-native';

// Firebase config (use your web app config)
const firebaseConfig = {
  apiKey: "AIzaSyBDQYDMH9eqYhs0j4wBO9gIKTJiIRRoTAY",
  authDomain: "jambgenius-1b8b2.firebaseapp.com",
  projectId: "jambgenius-1b8b2",
  storageBucket: "jambgenius-1b8b2.appspot.com",
  messagingSenderId: "471255099283",
  appId: "1:471255099283:web:b1c8d9e2f3a4b5c6d7e8f9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
