# Build JambGenius APK on HP 530 Laptop (EASIEST WAY!)

This is the BEST solution - your HP 530 can handle it easily!

## Step 1: Download JambGeniusMobile Folder
- Download from Replit as ZIP
- Extract to your laptop

## Step 2: Install Required Software

### Option A: Automatic (Recommended)
Download and run installers from:
1. **Node.js** (includes npm)
   - https://nodejs.org/
   - Download LTS version (v20 or v18)
   - Install with default settings

2. **Java JDK**
   - https://www.oracle.com/java/technologies/downloads/
   - Download JDK 17 or JDK 11
   - Install with default settings

### Option B: Manual
If you already have these installed, verify:
```
node --version    # Should show v18 or higher
npm --version     # Should show 8 or higher
java -version     # Should show Java 11+
```

## Step 3: Build APK

**In Command Prompt (Windows):**
```bash
# Navigate to folder
cd path\to\JambGeniusMobile

# Install dependencies
npm install --legacy-peer-deps

# Go to android folder
cd android

# Build APK
gradlew.bat assembleRelease

# Wait 20-30 minutes...
```

**If you're on Mac/Linux:**
```bash
cd /path/to/JambGeniusMobile
npm install --legacy-peer-deps
cd android
chmod +x gradlew
./gradlew assembleRelease
```

## Step 4: Get Your APK

After build completes, APK will be at:
```
jambgenius-mobile\android\app\build\outputs\apk\release\app-release.apk
```

## Step 5: Transfer to Phone & Install

### Option A: USB Cable
1. Connect HP 530 to Tecno Spark 5 via USB
2. Copy `app-release.apk` to phone
3. Tap APK to install

### Option B: Bluetooth
1. Send APK via Bluetooth from laptop to phone

### Option C: Google Drive
1. Upload APK to Google Drive
2. Download on phone
3. Tap to install

## Step 6: Enable Unknown Sources
On Tecno Spark 5:
- Settings > Security > Unknown Sources (Turn ON)
- Or: Settings > Apps > Special App Access > Install Unknown Apps

## Troubleshooting

**"gradlew not found"**
- Make sure you're in the `android` folder
- Run: `dir` to see files

**"Java not found"**
- Restart Command Prompt after installing Java
- Add Java to PATH if needed

**"Out of memory"**
- Close other programs
- Run: `set GRADLE_OPTS=-Xmx1024m`

**"Build takes too long"**
- Normal! First build is slow (20-30 min on HP 530)
- Keep laptop plugged in
- Don't interrupt!

## Summary

Total time on HP 530: ~30-45 minutes first time
- Install Node.js: 5 min
- Install Java: 5 min
- npm install: 10 min
- Gradle build: 15-20 min

✅ APK on your phone!
✅ Ready to test!
✅ Ready to share!

Good luck! 🚀
