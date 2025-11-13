# 📱 iOS Build Setup - USBett App

## ✅ Setup Complete!

Your iOS build infrastructure is ready to use with **Codemagic** cloud builds.

---

## 🚀 Quick Start (5 Minutes)

### 1. Push Code to Git
```bash
git add .
git commit -m "Add iOS build configuration"
git push origin main
```

### 2. Sign Up for Codemagic
- Visit: https://codemagic.io
- Sign up with GitHub/GitLab/Bitbucket
- **Free tier**: 500 build minutes/month

### 3. Add Your App
1. Click **"Add application"**
2. Select your `usbett` repository
3. Codemagic auto-detects `codemagic.yaml` ✅

### 4. Start Build
1. Click **"Start new build"**
2. Workflow: `ios-development-build`
3. Branch: `main`
4. **Click "Start build"** 🚀

### 5. Download Results (~10-15 min)
- Monitor build in real-time
- Download artifacts when complete
- Get `.xcarchive`, `.app` bundle, and `.zip`

---

## 📚 Documentation

| File | Description |
|------|-------------|
| **BUILD_IOS.md** | Quick reference guide (start here!) |
| **IOS_BUILD_GUIDE.md** | Complete detailed guide |
| **IOS_SETUP_COMPLETE.md** | Setup summary & next steps |
| **codemagic.yaml** | Build configuration (with comments) |

---

## 📦 What You'll Get

### Current Build (Development/Learning)
- ✅ iOS app archive (`.xcarchive`)
- ✅ Application bundle (`.app`)
- ✅ Compressed download (`.zip`)
- ✅ Complete build logs

### Can Do:
- ✅ Learn iOS build process
- ✅ Inspect app structure
- ✅ Verify compilation works
- ✅ Test CI/CD pipeline

### Cannot Do (Yet):
- ❌ Install on real iPhones/iPads
- ❌ Submit to App Store
- ❌ TestFlight distribution

**Why?** No Apple Developer account = unsigned builds (for learning only)

---

## 💰 Cost

### Current Setup: **FREE** 🎉
- Codemagic: 500 minutes/month
- ~10-15 min per build
- ~30-50 builds/month
- **Total: $0**

### Production (Future):
- Apple Developer: $99/year
- Codemagic usage: ~$3-10/month
- **Total: ~$99/year + usage**

---

## 🎯 Upgrade to Production

When ready for App Store:

1. **Get Apple Developer Account** ($99/year)
   - https://developer.apple.com/programs/

2. **Create App Store Connect API Key**
   - App Store Connect → Keys
   - Download `.p8` file

3. **Add to Codemagic**
   - Upload API key
   - Configure code signing

4. **Uncomment Production Workflow**
   - Edit `codemagic.yaml`
   - Enable `ios-production-build`

5. **Build Signed IPA**
   - Installable on devices
   - TestFlight & App Store ready

---

## 🔧 Build Process

Automated steps on Codemagic's macOS machines:

1. Install Node dependencies → `npm install`
2. Build web app → `npm run build`
3. Add iOS platform → `npx cap add ios`
4. Sync Capacitor → `npx cap sync ios`
5. Install CocoaPods → `pod install`
6. Build archive → `xcodebuild archive`
7. Extract & package artifacts

**Time**: ~10-15 minutes per build

---

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Codemagic
- Test `npm run build` locally first
- Common fixes documented in guides

### Can't Find Artifacts
- Go to build details page
- Scroll to "Artifacts" section
- Download before 30-day expiration

### Out of Minutes
- Free tier: 500 min/month
- Resets monthly
- Monitor usage in settings

---

## 📖 Key Files

```
usbett/
├── codemagic.yaml              # Build pipeline config
├── BUILD_IOS.md                # Quick start guide
├── IOS_BUILD_GUIDE.md          # Complete documentation
├── IOS_SETUP_COMPLETE.md       # Setup summary
├── capacitor.config.ts         # Capacitor settings
└── package.json                # Dependencies
```

---

## ✅ Next Steps

- [ ] Push code to Git
- [ ] Create Codemagic account
- [ ] Add app to Codemagic
- [ ] Start first build
- [ ] Download & inspect artifacts
- [ ] Read full documentation
- [ ] Understand limitations
- [ ] Plan for production (optional)

---

## 🆘 Help & Resources

- **Quick Start**: Read `BUILD_IOS.md`
- **Full Guide**: Read `IOS_BUILD_GUIDE.md`
- **Codemagic Docs**: https://docs.codemagic.io
- **Codemagic Support**: In-app chat
- **Capacitor Docs**: https://capacitorjs.com/docs

---

## 🎉 Ready to Build!

Everything is configured. Just:

**Push → Sign Up → Add App → Build → Download**

Build iOS apps from Linux using cloud infrastructure - exactly how professional teams do it! 🚀

---

**Happy Building!** ✨

Built with: Capacitor 6.2.0 + Codemagic + Node.js