# JambGenius Mobile App

React Native mobile application for JAMB exam preparation.

## Features
- Firebase Authentication (Email, Google, Anonymous)
- Practice Mode with multiple subjects
- Full Mock Exams
- Community Chatroom
- User Profiles & Statistics
- Study Streaks & Bookmarks
- Payment Integration (Paystack)

## Setup

### Prerequisites
- Node.js & npm
- Android Studio (for Android development)
- React Native CLI

### Installation
```bash
npm install
```

### Run on Android
```bash
npm run android
```

### Build APK for Play Store
```bash
cd android
./gradlew assembleRelease
```

The signed APK will be in `android/app/build/outputs/apk/release/`

### Firebase Configuration
Update Firebase credentials in `src/App.tsx`

### Deployment to Play Store
1. Create Google Play Developer Account
2. Follow https://reactnative.dev/docs/signed-apk-android
3. Upload APK via Play Console
