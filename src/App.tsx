import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import {ActivityIndicator, View} from 'react-native';

// Firebase config (use your web app config)
const firebaseConfig = {
  apiKey: "AIzaSyCSVbZVsBO8luLUT-HznUQe57FGRZ_2U5g",
  authDomain: "jambgenius.firebaseapp.com",
  projectId: "jambgenius",
  storageBucket: "jambgenius.firebasestorage.app",
  messagingSenderId: "1057264829205",
  appId: "1:1057264829205:web:384c075641553eacd95f1c",
  measurementId: "G-ZTDYRGNW4N"
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
