# 📦 Deployment Guide - USBett Mobile App

Complete guide for deploying your USBett app to Google Play Store and Apple App Store.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] App is fully tested on real devices
- [ ] All features work correctly
- [ ] Website loads properly in the app
- [ ] App icons and splash screens are added
- [ ] App name and package ID are finalized
- [ ] Privacy policy URL is ready (required by app stores)
- [ ] Terms of service URL is ready
- [ ] Support email is set up
- [ ] Screenshots prepared (see requirements below)

---

## 🤖 Android Deployment (Google Play Store)

### Step 1: Prepare App for Release

#### 1.1 Update Version
Edit `android/app/build.gradle`:
```gradle
android {
    defaultConfig {
        versionCode 1          // Increment for each release
        versionName "1.0.0"    // User-facing version
    }
}
```

#### 1.2 Create Signing Key
```bash
# Generate keystore (one time only)
keytool -genkey -v -keystore usbett-release-key.keystore -alias usbett -keyalg RSA -keysize 2048 -validity 10000

# Follow prompts and SAVE THE PASSWORD!
```

**⚠️ IMPORTANT:** 
- Keep this keystore file safe and backed up
- Never commit it to git
- Store passwords securely (use password manager)

#### 1.3 Configure Signing
Create `android/key.properties`:
```properties
storePassword=YOUR_KEYSTORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=usbett
storeFile=/path/to/usbett-release-key.keystore
```

Edit `android/app/build.gradle` to add signing config:
```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

### Step 2: Build Release APK/AAB

#### Option A: Build AAB (for Play Store)
```bash
cd android
./gradlew bundleRelease
cd ..
```
Output: `android/app/build/outputs/bundle/release/app-release.aab`

#### Option B: Build APK (for testing)
```bash
cd android
./gradlew assembleRelease
cd ..
```
Output: `android/app/build/outputs/apk/release/app-release.apk`

### Step 3: Test Release Build
```bash
# Install APK on device
adb install android/app/build/outputs/apk/release/app-release.apk

# Test thoroughly!
```

### Step 4: Create Play Store Listing

#### 4.1 Go to Google Play Console
https://play.google.com/console

#### 4.2 Create App
- Click "Create app"
- Enter app details:
  - App name: **USBett**
  - Default language: English
  - App/Game: App
  - Free/Paid: Free

#### 4.3 Prepare Store Listing

**Required Assets:**

1. **App Icon**: 512x512 PNG (32-bit with alpha)
2. **Feature Graphic**: 1024x500 PNG or JPG
3. **Screenshots** (at least 2):
   - Phone: 16:9 or 9:16 aspect ratio
   - Minimum 320px, maximum 3840px
   - PNG or JPG

4. **Short Description** (80 chars max):
   ```
   Your guide to legal US online casinos, poker, and sports betting information
   ```

5. **Full Description** (4000 chars max):
   ```
   USBett is your comprehensive guide to legal online gambling in the United States.
   
   FEATURES:
   • Browse reviews of top US casinos and sportsbooks
   • State-by-state gambling legality guides
   • Game guides for Slots, Blackjack, Roulette, and more
   • Exclusive bonus offers and promotions
   • Latest gambling legislation news
   
   Whether you're interested in online casinos, sports betting, or poker, USBett 
   provides trusted information to help you make informed decisions about legal 
   gambling options in your state.
   
   DISCOVER:
   - BetMGM, BetRivers, Golden Nugget, Borgata reviews
   - State-specific gambling laws and regulations
   - Welcome bonuses and no-deposit offers
   - Expert strategies and tips
   - Industry news and updates
   
   LEGAL & SAFE:
   We only feature licensed, regulated operators. All information is current and 
   verified by industry experts.
   
   Download USBett today and stay informed about legal online gambling in America!
   ```

6. **App Category**: Lifestyle or News & Magazines
7. **Contact Email**: your-support@email.com
8. **Privacy Policy URL**: https://www.usbets.com/privacy-policy

#### 4.4 Content Rating
- Complete the questionnaire honestly
- Gambling content requires proper rating

#### 4.5 Upload AAB
- Go to "Production" or "Internal Testing"
- Upload your `app-release.aab` file
- Add release notes

#### 4.6 Submit for Review
- Review all sections
- Submit app for review
- Wait 1-7 days for approval

---

## 🍎 iOS Deployment (Apple App Store)

### Step 1: Apple Developer Account

1. Enroll at https://developer.apple.com/programs/
2. Cost: $99/year
3. Wait for approval (can take 24-48 hours)

### Step 2: Prepare App for Release

#### 2.1 Update Version
Edit `ios/App/App.xcodeproj` in Xcode:
- Select App target
- General tab
- Update Version (1.0.0) and Build (1)

#### 2.2 Configure Signing
In Xcode:
1. Select App target
2. Signing & Capabilities tab
3. Automatically manage signing: ✓
4. Team: Select your Apple Developer team
5. Bundle Identifier: com.usbett.app

### Step 3: Create App Store Listing

#### 3.1 Go to App Store Connect
https://appstoreconnect.apple.com

#### 3.2 Create New App
- Click "+" → New App
- Platforms: iOS
- Name: USBett
- Primary Language: English
- Bundle ID: com.usbett.app
- SKU: usbett-ios (unique identifier)
- User Access: Full Access

#### 3.3 Prepare Store Listing

**Required Assets:**

1. **App Icon**: 1024x1024 PNG (no alpha channel)
2. **Screenshots** (at least 1 per device size):
   - iPhone 6.7": 1290x2796 (iPhone 14 Pro Max)
   - iPhone 6.5": 1242x2688 (iPhone 11 Pro Max)
   - iPhone 5.5": 1242x2208 (iPhone 8 Plus)
   
3. **App Preview Video** (optional but recommended)

4. **Description**:
   ```
   USBett is your comprehensive guide to legal online gambling in the United States.

   FEATURES:
   • Browse reviews of top US casinos and sportsbooks
   • State-by-state gambling legality guides  
   • Game guides for Slots, Blackjack, Roulette, and more
   • Exclusive bonus offers and promotions
   • Latest gambling legislation news

   DISCOVER:
   • Casino reviews: BetMGM, BetRivers, Golden Nugget, Borgata
   • State-specific gambling laws and regulations
   • Welcome bonuses and exclusive offers
   • Expert strategies and tips
   • Breaking industry news

   LEGAL & SAFE:
   We only feature licensed, regulated operators. All information is verified 
   by industry experts.

   Download USBett today and stay informed about legal online gambling in America!
   ```

5. **Keywords** (100 chars max):
   ```
   casino,gambling,sports,betting,poker,legal,USA,sportsbook,slots,blackjack
   ```

6. **Support URL**: https://www.usbets.com/contact
7. **Marketing URL**: https://www.usbets.com
8. **Privacy Policy URL**: https://www.usbets.com/privacy-policy

#### 3.4 App Information
- Category: Primary - News, Secondary - Lifestyle
- Content Rights: Check if you have necessary rights
- Age Rating: 17+ (Frequent/Intense Simulated Gambling)

### Step 4: Build and Archive

#### 4.1 In Xcode
```bash
npm run open:ios
```

1. Select "Any iOS Device (arm64)" as target
2. Product → Scheme → Edit Scheme
3. Run → Build Configuration → Release
4. Product → Archive
5. Wait for build (5-10 minutes)

#### 4.2 Upload to App Store
1. When archive completes, Organizer opens
2. Select your archive
3. Click "Distribute App"
4. Choose "App Store Connect"
5. Upload
6. Include symbols: Yes
7. Automatically manage signing: Yes
8. Upload

#### 4.3 Submit for Review
Back in App Store Connect:
1. Select your app version
2. Build → Select the uploaded build
3. Answer export compliance questions
4. Add release notes
5. Submit for Review
6. Wait 1-3 days for review

---

## 🎯 Post-Deployment

### Monitor Reviews
- Google Play Console → User feedback
- App Store Connect → Ratings and Reviews
- Respond to user feedback promptly

### Track Analytics
- Google Play Console → Statistics
- App Store Connect → Analytics
- Monitor crashes and bugs

### Update Strategy
- Fix critical bugs immediately
- Plan feature updates quarterly
- Keep website URL updated if it changes

---

## 📊 Screenshot Guidelines

### Creating Screenshots

#### Tools:
- **Android**: Android Studio Device Manager
- **iOS**: Xcode Simulator
- **Design**: Figma, Photoshop, Canva

#### Tips:
1. Show key features (casino reviews, state guides, bonuses)
2. Add text overlays explaining features
3. Use consistent branding
4. Show actual app content
5. Include device frames (optional)

#### Required Sizes:

**Android:**
- Phone: 1080x1920, 1080x2340
- Tablet: 1600x2560 (optional)

**iOS:**
- 6.7": 1290x2796
- 6.5": 1242x2688
- 5.5": 1242x2208
- iPad: 2048x2732 (optional)

---

## 🔒 Privacy & Legal

### Privacy Policy Requirements
Must include:
- What data is collected (if any)
- How data is used
- Third-party services
- User rights
- Contact information

### Gambling Content Warnings
- Age restrictions (18+ or 21+)
- Responsible gambling message
- Legal disclaimer about state laws
- No real money transactions in app

### Terms of Service
- App usage terms
- Content disclaimer
- Liability limitations
- Affiliate link disclosure (if applicable)

---

## 🐛 Common Issues

### Android: "Upload failed: Version code 1 already exists"
**Solution**: Increment `versionCode` in `build.gradle`

### iOS: "Invalid Bundle"
**Solution**: 
- Check bundle ID matches App Store Connect
- Verify signing certificates are valid
- Clean build folder (Shift+Cmd+K)

### "Missing Privacy Policy"
**Solution**: Add valid privacy policy URL in store listing

### Rejection: "Incomplete app"
**Solution**: 
- Ensure all links work
- Website loads properly
- No placeholder content
- Add demo account if needed

---

## 🚀 Quick Reference

### Android Build Commands
```bash
# Debug
./gradlew assembleDebug

# Release APK
./gradlew assembleRelease

# Release AAB
./gradlew bundleRelease
```

### Version Updates
```bash
# Android: Edit android/app/build.gradle
versionCode X
versionName "X.X.X"

# iOS: Edit in Xcode → General → Version/Build
```

### Store URLs
- **Google Play Console**: https://play.google.com/console
- **App Store Connect**: https://appstoreconnect.apple.com
- **Apple Developer**: https://developer.apple.com

---

## ✅ Final Checklist

- [ ] Release builds created successfully
- [ ] Tested on multiple devices
- [ ] Store listings completed
- [ ] Screenshots uploaded (all required sizes)
- [ ] Privacy policy published and linked
- [ ] Age rating completed
- [ ] Contact email configured
- [ ] Release notes written
- [ ] Submitted for review
- [ ] Keystore/certificates backed up securely

---

## 🎉 Congratulations!

Your USBett app is now submitted to the app stores! 

**Expected Timeline:**
- **Google Play**: 1-7 days review
- **Apple App Store**: 1-3 days review

You'll receive email notifications about review status.

Good luck! 🍀