# 📱 iOS Build Setup Guide - USBett App

Complete guide for building your iOS app using Codemagic (from Linux!)

---

## 🎯 What You'll Learn

This guide covers:
- Building iOS apps without a Mac (using Codemagic cloud)
- Understanding iOS build process
- Development builds vs Production builds
- What you need for App Store distribution later

---

## 📋 Current Setup

- **Platform**: Capacitor (web → native iOS)
- **App ID**: com.usbett.app
- **App Name**: USBett
- **Build Service**: Codemagic (cloud macOS machines)
- **Current Status**: Development/Learning build (no Apple Developer account needed)

---

## 🚀 Getting Started with Codemagic

### Step 1: Sign Up for Codemagic

1. **Go to Codemagic**: https://codemagic.io
2. **Click "Sign up for free"**
3. **Choose your Git provider**:
   - GitHub
   - GitLab
   - Bitbucket
   - Azure DevOps
4. **Authorize access** to your repositories
5. **You get 500 free build minutes/month!**

### Step 2: Push Your Code to Git

If you haven't already:

```bash
# Initialize git repository (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - iOS build setup"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/usbett.git

# Push to GitHub/GitLab/etc
git push -u origin main
```

### Step 3: Add Your App to Codemagic

1. **In Codemagic dashboard**, click **"Add application"**
2. **Select your Git provider** and authorize if needed
3. **Choose your repository**: `usbett` or whatever you named it
4. **Codemagic will detect** the `codemagic.yaml` file automatically
5. **Select the workflow**: Choose "ios-development-build"

### Step 4: Start Your First Build

1. **Click "Start new build"**
2. **Select**:
   - Workflow: `ios-development-build`
   - Branch: `main` (or your default branch)
3. **Click "Start build"**
4. **Watch the magic happen!** 🎉

You can monitor the build in real-time from your Linux browser!

---

## 📦 What Gets Built

### Development Build (Current Setup)

**What you get**:
- ✅ `.xcarchive` file (iOS app archive)
- ✅ `.app` bundle (application package)
- ✅ `.zip` file for easy download
- ✅ Build logs and diagnostics

**What you can do with it**:
- ✅ Inspect the app structure
- ✅ Learn the iOS build process
- ✅ Test build pipeline
- ✅ Verify everything compiles correctly
- ✅ Run in iOS Simulator (if you have a Mac)

**Limitations**:
- ❌ Cannot install on real iPhone/iPad
- ❌ Cannot submit to App Store
- ❌ Cannot distribute via TestFlight
- ❌ No code signing (unsigned)

### Production Build (Future - Requires Apple Developer Account)

**What you'll get**:
- ✅ Signed `.ipa` file (installable iOS app)
- ✅ TestFlight distribution
- ✅ App Store submission
- ✅ Install on real devices
- ✅ Full app distribution

**Requirements**:
- 💰 Apple Developer Account ($99/year)
- 🔐 Code signing certificates
- 📱 Provisioning profiles

---

## 🔍 Understanding the Build Process

### What Happens During Build

1. **Install Dependencies** (`npm install`)
   - Downloads all Node.js packages
   - Prepares build tools

2. **Build Web Assets** (`npm run build`)
   - Vite compiles your web app
   - Creates optimized HTML/CSS/JS
   - Output goes to `dist/` folder

3. **Add iOS Platform** (`npx cap add ios`)
   - Creates iOS project structure
   - Generates Xcode project files
   - Sets up native iOS wrapper

4. **Sync Capacitor** (`npx cap sync ios`)
   - Copies web assets to iOS project
   - Updates native configuration
   - Links plugins and dependencies

5. **Install CocoaPods** (`pod install`)
   - Downloads iOS native dependencies
   - Configures Xcode workspace
   - Similar to npm for iOS

6. **Build Archive** (`xcodebuild archive`)
   - Compiles Swift/Objective-C code
   - Links frameworks and libraries
   - Creates `.xcarchive` file

7. **Extract App Bundle**
   - Extracts `.app` from archive
   - Creates downloadable zip
   - Ready for inspection

---

## 📁 Build Artifacts

After a successful build, you can download:

### 1. App.xcarchive/
```
App.xcarchive/
├── Info.plist              # Archive metadata
├── Products/
│   └── Applications/
│       └── App.app/        # The actual iOS app
├── dSYMs/                  # Debug symbols (for crash reports)
└── SCMBlueprint/           # Source control info
```

### 2. USBett.app
```
USBett.app/
├── Info.plist              # App configuration
├── App (executable)        # Main binary
├── Assets.car              # App icons, images
├── Base.lproj/             # Localization files
├── public/                 # Your web assets
└── Frameworks/             # Native libraries
```

### 3. Build Logs
- Console output from each step
- Error messages (if any)
- Performance metrics

---

## ⚙️ Customizing Your Build

### Update Build Configuration

Edit `codemagic.yaml` to customize:

#### Change Xcode Version
```yaml
environment:
  xcode: 14.2  # or: latest, 15.0, etc.
```

#### Change Node Version
```yaml
environment:
  node: 18  # or: 16, 20, latest
```

#### Add Environment Variables
```yaml
environment:
  vars:
    API_URL: "https://api.example.com"
    ENVIRONMENT: "production"
```

#### Trigger Builds on Different Branches
```yaml
triggering:
  branch_patterns:
    - pattern: 'main'
      include: true
    - pattern: 'develop'
      include: true
    - pattern: 'feature/*'
      include: true
```

#### Change Notification Email
```yaml
publishing:
  email:
    recipients:
      - your-email@example.com
      - team@example.com
```

---

## 🔧 Troubleshooting

### Build Fails: "npm install error"

**Problem**: Node dependency installation failed

**Solution**:
```bash
# Locally, delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Commit the updated package-lock.json
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Build Fails: "Vite build error"

**Problem**: Web build failed

**Solution**:
- Check your code for syntax errors
- Test locally: `npm run build`
- Check Vite configuration in `vite.config.js`

### Build Fails: "Pod install error"

**Problem**: CocoaPods dependency issue

**Solution**:
- Usually auto-resolves
- Check Capacitor plugin versions in `package.json`
- Ensure all plugins are compatible with Capacitor 6

### Build Fails: "Xcodebuild error"

**Problem**: iOS compilation failed

**Solution**:
- Check build logs for specific error
- Verify `capacitor.config.ts` settings
- Ensure app ID format is correct: `com.domain.app`

### Build Takes Too Long

**Problem**: Build exceeds time limit

**Solution**:
- Free tier: 60 minutes max per build
- Enable caching in `codemagic.yaml`:
```yaml
cache:
  cache_paths:
    - $HOME/Library/Caches/CocoaPods
    - $HOME/.npm
```

---

## 🎓 Learning Resources

### iOS Development Basics
- Apple Developer Documentation: https://developer.apple.com/documentation/
- iOS Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/ios

### Capacitor
- Official Docs: https://capacitorjs.com/docs
- iOS Configuration: https://capacitorjs.com/docs/ios/configuration
- Plugins: https://capacitorjs.com/docs/plugins

### Codemagic
- Documentation: https://docs.codemagic.io
- YAML Reference: https://docs.codemagic.io/yaml/yaml-getting-started/
- Capacitor Builds: https://docs.codemagic.io/yaml-running-builds/building-capacitor-projects/

### Code Signing (for later)
- iOS Code Signing Guide: https://docs.codemagic.io/code-signing/ios-code-signing/
- Certificates Explained: https://developer.apple.com/support/certificates/

---

## 📈 Next Steps - Path to Production

### Phase 1: Learning (Current) ✅
- ✅ Build pipeline set up
- ✅ Successful builds on Codemagic
- ✅ Understanding build artifacts
- ✅ Learn iOS app structure

### Phase 2: Development (When Ready)
1. **Get Apple Developer Account** ($99/year)
   - Individual or Organization
   - Wait 24-48 hours for approval
   
2. **Create App Store Connect Account**
   - Linked to Developer account
   - Create app listing
   - Set up TestFlight

3. **Set Up Code Signing**
   - Create certificates
   - Generate provisioning profiles
   - Add to Codemagic

### Phase 3: Testing
1. **Build Signed IPA**
   - Use production workflow in `codemagic.yaml`
   - Uncomment the signed build section
   
2. **TestFlight Distribution**
   - Automatic upload from Codemagic
   - Invite internal testers
   - Collect feedback

3. **Device Testing**
   - Install on real iPhones/iPads
   - Test all features
   - Fix bugs

### Phase 4: Production
1. **App Store Submission**
   - Complete app listing
   - Add screenshots
   - Submit for review
   
2. **Review Process**
   - Apple reviews in 1-3 days
   - Address any issues
   
3. **Launch! 🚀**
   - App goes live
   - Monitor reviews
   - Plan updates

---

## 💰 Cost Breakdown

### Current Setup (Free!)
- ✅ Codemagic: 500 minutes/month FREE
- ✅ Git hosting: FREE (GitHub/GitLab)
- ✅ Development builds: FREE
- **Total: $0/month**

### Production Setup (Future)
- 💰 Apple Developer: $99/year
- 💰 Codemagic Pro: $0.038/minute (after free tier)
  - ~10 min/build = $0.38/build
  - ~10 builds/month = $3.80/month
- **Total: ~$99/year + $3-10/month**

### Cost Saving Tips
- Use free tier efficiently (500 min = ~50 builds/month)
- Cache dependencies to speed up builds
- Only build on important branches (main, develop)
- Use manual triggers instead of every push

---

## 🎯 Quick Command Reference

### Local Commands (when you have Node.js)
```bash
# Install dependencies
npm install

# Build web assets
npm run build

# Sync to Capacitor (requires Mac for iOS)
npm run sync

# Clean build
rm -rf dist node_modules
npm install
npm run build
```

### Git Commands
```bash
# Check status
git status

# Commit changes
git add .
git commit -m "Update app"

# Push to trigger build
git push origin main

# Create new branch
git checkout -b feature/new-feature
```

### Codemagic
- Dashboard: https://codemagic.io/apps
- Start build: Click "Start new build" button
- View logs: Click on running/completed build
- Download artifacts: Build details → Artifacts section

---

## ✅ Success Checklist

- [ ] Signed up for Codemagic
- [ ] Pushed code to Git repository
- [ ] Added app to Codemagic
- [ ] First build completed successfully
- [ ] Downloaded and inspected build artifacts
- [ ] Understand what unsigned builds can/cannot do
- [ ] Read through iOS build process
- [ ] Explored Codemagic dashboard
- [ ] Customized build notifications
- [ ] Know next steps for production

---

## 🆘 Getting Help

### Codemagic Support
- In-app chat: Click chat icon in Codemagic dashboard
- Community: https://community.codemagic.io
- Documentation: https://docs.codemagic.io

### Capacitor
- Discord: https://discord.gg/capacitor
- Forum: https://forum.ionicframework.com/c/capacitor

### This Project
- Check build logs first
- Review error messages carefully
- Google specific error codes
- Ask in relevant communities

---

## 🎉 Congratulations!

You've set up iOS building from Linux using cloud infrastructure! This is exactly how many professional teams build iOS apps - using CI/CD services rather than local Xcode.

**What you've learned**:
- Cloud-based iOS building
- Capacitor project structure
- iOS build pipeline
- Artifacts and their purposes
- Path to production

**Keep building! 🚀**

---

## 📝 Important Notes

1. **Build Minutes**: Monitor your free tier usage (500 min/month)
2. **Security**: Never commit sensitive keys or passwords
3. **Git**: Always push working code, test locally first
4. **Artifacts**: Download important builds, they expire after 30 days
5. **Learning**: Each build teaches you more about iOS development

---

Last Updated: 2024
Platform: Capacitor 6.2.0
Build Service: Codemagic