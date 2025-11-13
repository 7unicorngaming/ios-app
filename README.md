# 📱 iOS App - USBett Mobile

[![Codemagic build status](https://api.codemagic.io/apps/YOUR_APP_ID/YOUR_WORKFLOW_ID/status_badge.svg)](https://codemagic.io/apps/YOUR_APP_ID/YOUR_WORKFLOW_ID/latest_build)

USBett mobile application built with Capacitor. Build iOS apps from Linux using Codemagic cloud infrastructure!

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Git configured
- Codemagic account (free tier available)

### Local Development
```bash
# Install dependencies
npm install

# Build web assets
npm run build

# Sync with Capacitor
npm run sync
```

### Build iOS on Codemagic (No Mac Needed!)

1. **Sign up for Codemagic**: https://codemagic.io
2. **Add this repository** to Codemagic
3. **Select workflow**: `ios-development-build`
4. **Click "Start build"**
5. **Download artifacts** (~10-15 minutes)

📖 **Detailed Guide**: See [BUILD_IOS.md](BUILD_IOS.md)

## 📦 What's Included

### Configuration Files
- **`codemagic.yaml`** - Automated iOS build pipeline
- **`capacitor.config.ts`** - Capacitor configuration
- **`package.json`** - Dependencies and scripts
- **`vite.config.js`** - Vite build configuration

### Documentation
- **`BUILD_IOS.md`** - Quick start guide (5 minutes)
- **`IOS_BUILD_GUIDE.md`** - Complete comprehensive guide
- **`IOS_SETUP_COMPLETE.md`** - Setup summary and upgrade path
- **`README_IOS_BUILD.md`** - Quick reference

### App Structure
```
ios-app/
├── android/              # Android platform (ready)
├── src/                  # Web app source
├── public/               # Static assets
├── resources/            # App icons & splash screens
├── dist/                 # Built web assets (generated)
├── codemagic.yaml        # CI/CD configuration
├── capacitor.config.ts   # Capacitor settings
└── Documentation files   # Complete guides
```

## 🎯 Current Build Type

**Development/Learning Build** (No Apple Developer Account Required)

### Can Do:
- ✅ Learn iOS build process
- ✅ Test CI/CD pipeline
- ✅ Inspect app structure
- ✅ Verify compilation

### Cannot Do (Yet):
- ❌ Install on real devices
- ❌ Submit to App Store
- ❌ TestFlight distribution

**Why?** Unsigned builds are for learning. For production, you'll need an [Apple Developer account](https://developer.apple.com/programs/) ($99/year).

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server
npm run build            # Build web assets

# Capacitor
npm run sync             # Sync all platforms
npm run sync:ios         # Sync iOS only
npm run sync:android     # Sync Android only
npm run add:ios          # Add iOS platform (requires Mac)
npm run add:android      # Add Android platform
```

## 📱 App Information

- **App Name**: USBett
- **Bundle ID**: com.usbett.app
- **Platforms**: iOS, Android
- **Framework**: Capacitor 6.2.0
- **Build Tool**: Vite 5.4.21

## 🏗️ Build Process

The automated build pipeline:

1. 📦 Install Node dependencies
2. 🏗️ Build web app (Vite)
3. 📱 Add iOS platform
4. 🔄 Sync Capacitor
5. 🍫 Install CocoaPods
6. 🔨 Build iOS archive
7. 📦 Package artifacts

**Duration**: ~10-15 minutes per build

## 💰 Cost

### Current Setup: **FREE**
- Codemagic free tier: 500 minutes/month
- ~30-50 builds per month
- No credit card required

### Production (Future):
- Apple Developer: $99/year
- Codemagic Pro: ~$3-10/month

## 🎓 Learning Path

1. **Start Here**: Read [BUILD_IOS.md](BUILD_IOS.md)
2. **Deep Dive**: Read [IOS_BUILD_GUIDE.md](IOS_BUILD_GUIDE.md)
3. **First Build**: Set up Codemagic
4. **Explore**: Download and inspect artifacts
5. **Production**: Upgrade when ready

## 📚 Documentation

| File | Purpose |
|------|---------|
| [BUILD_IOS.md](BUILD_IOS.md) | 5-minute quick start |
| [IOS_BUILD_GUIDE.md](IOS_BUILD_GUIDE.md) | Complete guide with troubleshooting |
| [IOS_SETUP_COMPLETE.md](IOS_SETUP_COMPLETE.md) | Setup summary & checklist |
| [README_IOS_BUILD.md](README_IOS_BUILD.md) | Quick reference |

## 🔄 CI/CD with Codemagic

This project uses Codemagic for automated iOS builds:

- **Trigger**: Push to `main` or `develop` branch
- **Build Time**: ~10-15 minutes
- **Artifacts**: `.xcarchive`, `.app` bundle, `.zip`
- **Notifications**: Email on success/failure

### Workflows Available:
1. **`ios-development-build`** - Current (no signing)
2. **`ios-production-build`** - Template for future (requires Apple Developer account)

## 🚀 Upgrade to Production

Ready for App Store distribution? Follow these steps:

1. **Get Apple Developer Account** ($99/year)
   - Enroll at https://developer.apple.com/programs/

2. **Create App Store Connect API Key**
   - Download `.p8` key file
   - Save Key ID and Issuer ID

3. **Configure Codemagic**
   - Add API key integration
   - Update `codemagic.yaml`

4. **Build Signed IPA**
   - Use production workflow
   - Distribute via TestFlight
   - Submit to App Store

📖 **Full Instructions**: See [IOS_BUILD_GUIDE.md](IOS_BUILD_GUIDE.md#upgrade-to-production)

## 🐛 Troubleshooting

### Build fails on Codemagic
- Check build logs for specific errors
- Verify `npm run build` works locally
- See [IOS_BUILD_GUIDE.md](IOS_BUILD_GUIDE.md#troubleshooting) for solutions

### Can't find build artifacts
- Build must complete successfully first
- Go to build details → Artifacts section
- Files expire after 30 days

### Out of build minutes
- Free tier: 500 minutes/month
- Resets monthly
- Consider upgrading if needed

## 🔗 Resources

- **Codemagic**: https://codemagic.io
- **Codemagic Docs**: https://docs.codemagic.io
- **Capacitor Docs**: https://capacitorjs.com/docs
- **Apple Developer**: https://developer.apple.com
- **Vite**: https://vitejs.dev

## 📄 License

ISC

## 👥 Author

**7unicorngaming**
- GitHub: [@7unicorngaming](https://github.com/7unicorngaming)
- Website: https://7unicorngaming.com
- Email: 7unicorngaming@gmail.com

---

## ✨ Features

- 🌐 Web-based mobile app (Capacitor)
- 📱 iOS build pipeline (Codemagic)
- 🤖 Android support included
- 📦 Automated builds on push
- 📧 Email notifications
- 🔄 Hot reload in development
- 🎨 Custom splash screens
- 🔔 Status bar configuration

---

## 🎉 Get Started Now!

1. Clone this repository
2. Read [BUILD_IOS.md](BUILD_IOS.md)
3. Sign up for Codemagic
4. Start your first build
5. Download and explore!

**Build iOS apps from Linux! 🚀**

---

Built with ❤️ using Capacitor + Codemagic + Vite
