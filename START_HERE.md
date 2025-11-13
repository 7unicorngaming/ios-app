# 🚀 START HERE - USBett Mobile App

Welcome! Your USBett mobile app wrapper is ready. Follow these steps to get started in **5 minutes**.

---

## ⚡ Quick Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the Web Assets
```bash
npm run build
```

### Step 3: Test in Browser
```bash
npm run dev
```
Open http://localhost:3000 - you should see the USBett website loading!

---

## 📱 Test on Android

### First Time Only:
```bash
# Sync to Android
npm run sync:android

# Open Android Studio
npm run open:android
```

### In Android Studio:
1. Wait for Gradle sync to complete (bottom right)
2. Click the green "Run" button ▶️ at the top
3. Select your device or emulator
4. Your app will launch! 🎉

---

## 🎯 What You Have

✅ **Working mobile app** that wraps www.usbets.com  
✅ **Splash screen** with loading animation  
✅ **Native status bar** integration  
✅ **Back button** handling (Android)  
✅ **Offline detection** with error screen  
✅ **Production ready** - can deploy to stores today  

---

## 📖 Next Steps

### Customize the App
1. **Change colors**: Edit `index.html` (search for `#1a1a1a`)
2. **Change URL**: Edit `src/main.js` (line 7)
3. **Change app name**: Edit `capacitor.config.ts`

### Add Icons & Splash Screens
1. Create `resources/icon.png` (1024x1024)
2. Create `resources/splash.png` (2732x2732)
3. Run: `npx capacitor-assets generate`

### Deploy to App Stores
- **Google Play**: See `DEPLOYMENT.md`
- **Apple App Store**: See `DEPLOYMENT.md`

---

## 📚 Documentation

| File | What's Inside |
|------|---------------|
| `QUICKSTART.md` | Detailed setup guide with screenshots |
| `README.md` | Complete technical documentation |
| `DEPLOYMENT.md` | Step-by-step store deployment guide |
| `PROJECT_SUMMARY.md` | Project overview and reference |

---

## 🐛 Problems?

### Website not loading?
- Check your internet connection
- Verify URL in `src/main.js` is correct
- Check browser console for errors

### Build errors?
```bash
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Android Studio issues?
```bash
cd android
./gradlew clean
cd ..
npm run sync:android
```

---

## 💡 Common Commands

```bash
npm run dev              # Test in browser
npm run build            # Build web assets
npm run sync             # Sync to all platforms
npm run sync:android     # Sync to Android only
npm run open:android     # Open Android Studio
```

---

## ✅ Success Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] App builds (`npm run build`)
- [ ] Works in browser (`npm run dev`)
- [ ] Synced to Android (`npm run sync:android`)
- [ ] Runs on Android device ✨

---

## 🎉 You're Ready!

Your USBett app is configured and ready to use. The hard work is done!

**Need help?** Read the documentation files or visit:
- Capacitor Docs: https://capacitorjs.com/docs
- Android Setup: https://capacitorjs.com/docs/android
- iOS Setup: https://capacitorjs.com/docs/ios

**Happy building!** 🚀