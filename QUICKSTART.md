# 🚀 Quick Start Guide - USBett Mobile App

Get your USBett mobile app up and running in minutes!

## ⚡ Fast Setup (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the App
```bash
npm run build
```

### Step 3: Test in Browser
```bash
npm run dev
```
Open http://localhost:3000 in your browser to see the app!

---

## 📱 Build for Mobile

### For Android:

#### First Time Setup:
```bash
# Add Android platform
npm run add:android

# Sync web assets
npm run sync:android

# Open in Android Studio
npm run open:android
```

#### In Android Studio:
1. Wait for Gradle to finish syncing (check bottom status bar)
2. Connect your Android device via USB (enable USB debugging) OR start an emulator
3. Click the green "Run" button (▶️) at the top
4. Your app will install and launch on the device!

#### Rebuilding After Changes:
```bash
npm run build && npm run sync:android
```
Then press "Run" again in Android Studio.

---

### For iOS (Mac only):

#### First Time Setup:
```bash
# Add iOS platform
npm run add:ios

# Install CocoaPods dependencies
cd ios/App && pod install && cd ../..

# Sync web assets
npm run sync:ios

# Open in Xcode
npm run open:ios
```

#### In Xcode:
1. Select your development team (Xcode → Preferences → Accounts)
2. Choose a target device/simulator at the top
3. Click the "Play" button (▶️) 
4. Your app will install and launch!

#### Rebuilding After Changes:
```bash
npm run build && npm run sync:ios
```
Then press "Play" again in Xcode.

---

## 🎯 Common Tasks

### Preview Before Building
```bash
npm run dev
```
Opens at http://localhost:3000

### Change the Website URL
Edit `src/main.js`:
```javascript
const WEBSITE_URL = 'https://www.usbets.com'; // Change this line
```

### Update App Name or ID
Edit `capacitor.config.ts`:
```typescript
appId: 'com.usbett.app',  // Your package ID
appName: 'USBett',         // Your app name
```

### Sync All Platforms at Once
```bash
npm run sync
```

---

## 🎨 Add App Icons & Splash Screen

### Option 1: Auto-Generate (Recommended)
```bash
# Install the tool
npm install -g @capacitor/assets

# Create these files:
# resources/icon.png (1024x1024)
# resources/splash.png (2732x2732)

# Generate all sizes
npx capacitor-assets generate
```

### Option 2: Manual
Place icons manually in:
- Android: `android/app/src/main/res/mipmap-*/`
- iOS: `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

---

## 🐛 Troubleshooting

### "npm run build" fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Android Studio won't sync
```bash
# In Android Studio: File → Invalidate Caches → Invalidate and Restart
# Or manually:
cd android
./gradlew clean
cd ..
```

### iOS build fails
```bash
# Reinstall pods
cd ios/App
rm -rf Pods Podfile.lock
pod install
cd ../..
```

### Website not loading in app
1. Check your internet connection
2. Verify the URL in `src/main.js` is correct
3. Some websites block iframe embedding - check browser console
4. Try rebuilding: `npm run build && npm run sync`

### Can't see changes after editing
Always rebuild and sync after changes:
```bash
npm run build && npm run sync
```

---

## 📦 Build Release APK/IPA

### Android APK (for testing):
1. Open Android Studio: `npm run open:android`
2. Go to **Build → Build Bundle(s) / APK(s) → Build APK(s)**
3. APK will be in `android/app/build/outputs/apk/`

### Android AAB (for Play Store):
1. Open Android Studio: `npm run open:android`
2. Go to **Build → Generate Signed Bundle / APK**
3. Follow the wizard to create/use a keystore
4. AAB will be in `android/app/build/outputs/bundle/`

### iOS IPA (for App Store):
1. Open Xcode: `npm run open:ios`
2. Select "Any iOS Device (arm64)" as target
3. Go to **Product → Archive**
4. Use the Organizer to upload to App Store Connect

---

## ✅ Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] App builds successfully (`npm run build`)
- [ ] Tested in browser (`npm run dev`)
- [ ] Android platform added (`npm run add:android`)
- [ ] App runs on Android device/emulator
- [ ] (Optional) iOS platform added (`npm run add:ios`)
- [ ] (Optional) App runs on iOS device/simulator
- [ ] App icons and splash screen added
- [ ] Website URL is correct
- [ ] App name and package ID updated

---

## 🆘 Need Help?

- **Capacitor Docs**: https://capacitorjs.com/docs
- **Android Studio Setup**: https://developer.android.com/studio/intro
- **Xcode Setup**: https://developer.apple.com/xcode/
- **Vite Docs**: https://vitejs.dev/

---

## 🎉 You're Done!

Your USBett mobile app is ready to go! The app will load www.usbets.com in a native mobile wrapper with splash screen, status bar integration, and back button handling.

**Next Steps:**
1. Customize the colors and branding
2. Add your own app icons
3. Test on real devices
4. Submit to app stores!

Happy building! 🚀