# Build JambGenius APK in 5 Minutes (No Laptop!)

## ✅ Easiest Way: Use Expo Cloud Build

### What You Need:
- Phone or browser only
- Free Expo account

### Steps:

**Step 1: Create Expo Account (FREE)**
- Go to: https://expo.dev
- Sign up with email

**Step 2: Install EAS CLI**
```bash
npm install -g eas-cli
```

**Step 3: Initialize EAS in the project**
```bash
cd JambGeniusMobile
eas init --id your-project-name
```

**Step 4: Build APK in Cloud**
```bash
eas build --platform android
```

- Choose "Release" build
- Wait 15-20 minutes
- Download APK link sent to your email

**Step 5: Install on Android Phone**
- Download APK on your phone
- Go to Settings → Apps → Allow Unknown Sources
- Tap APK to install

---

## That's it! You now have JambGenius app on your phone! 🎉

No laptop needed. Everything happens in the cloud.

---

## Alternative: If You Have Computer Later
```bash
npm install
cd android
./gradlew assembleRelease
# APK will be in: android/app/build/outputs/apk/release/
```
