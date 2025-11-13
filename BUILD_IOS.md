# 🚀 Quick Start - Build iOS App on Codemagic

Fast guide to get your first iOS build running!

---

## ⚡ 5-Minute Setup

### 1. Push to Git
```bash
# If not already done
git init
git add .
git commit -m "Add Codemagic iOS build config"
git push origin main
```

### 2. Sign Up for Codemagic
- Go to: https://codemagic.io
- Sign up with GitHub/GitLab/Bitbucket
- **Free**: 500 build minutes/month

### 3. Add Your App
1. Click **"Add application"**
2. Select your repository: `usbett`
3. Codemagic detects `codemagic.yaml` automatically ✅

### 4. Start Build
1. Click **"Start new build"**
2. Select workflow: `ios-development-build`
3. Select branch: `main`
4. Click **"Start build"** 🚀

### 5. Wait & Download
- Build takes ~10-15 minutes
- Monitor in real-time from browser
- Download artifacts when complete

---

## 📦 What You'll Get

After build completes:

✅ **App.xcarchive** - iOS app archive  
✅ **USBett.app** - Application bundle  
✅ **USBett-app.zip** - Compressed for download  
✅ **Build logs** - Full console output

---

## ⚠️ Important Notes

**Current Build Type**: Development/Unsigned

**Can Do**:
- ✅ Learn iOS build process
- ✅ Inspect app structure
- ✅ Verify compilation
- ✅ Test CI/CD pipeline

**Cannot Do**:
- ❌ Install on real iPhone/iPad
- ❌ Submit to App Store
- ❌ Distribute to testers

**Why?** No Apple Developer account = No code signing

---

## 🎓 Understanding the Build

### Build Steps (Automated by Codemagic):
1. **Install dependencies** → `npm install`
2. **Build web app** → `npm run build` (Vite)
3. **Add iOS platform** → `npx cap add ios`
4. **Sync Capacitor** → `npx cap sync ios`
5. **Install CocoaPods** → `pod install`
6. **Build archive** → `xcodebuild archive`
7. **Extract bundle** → Create downloadable files

### Build Time: ~10-15 minutes
- Node dependencies: 2-3 min
- Vite build: 1-2 min
- iOS platform setup: 2-3 min
- CocoaPods: 2-4 min
- Xcode build: 3-5 min

---

## 🔧 Customization

### Change Email Notifications
Edit `codemagic.yaml`:
```yaml
publishing:
  email:
    recipients:
      - your-email@example.com  # ← Change this
```

### Build on Different Branches
```yaml
triggering:
  branch_patterns:
    - pattern: 'main'
      include: true
    - pattern: 'develop'      # ← Add more branches
      include: true
```

### Manual Builds Only
Remove or comment out the `triggering` section to only allow manual builds.

---

## 🐛 Common Issues

### Build Fails: "npm install error"
```bash
# Fix locally
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Fix dependencies"
git push
```

### Build Fails: "Vite build error"
```bash
# Test locally first
npm run build

# Fix errors, then push
git add .
git commit -m "Fix build errors"
git push
```

### Build Takes Too Long (>60 min)
- Free tier limit: 60 minutes
- Usually completes in 10-15 min
- Check build logs for stuck processes
- Contact Codemagic support if needed

### Can't Find Build Artifacts
- Go to build details page
- Scroll to **"Artifacts"** section
- Files available for 30 days
- Download important builds!

---

## 📊 Monitor Usage

### Check Free Tier Usage:
1. Codemagic Dashboard
2. Click your profile/settings
3. View "Build minutes used"
4. **Limit**: 500 minutes/month
5. **Per build**: ~10-15 minutes
6. **Builds/month**: ~30-50 builds

### Tips to Save Minutes:
- Don't build every push (use manual triggers)
- Build only on important branches
- Enable caching (already configured)
- Test locally before pushing

---

## 🎯 Next Steps

### For Production Builds (Future):

1. **Get Apple Developer Account** ($99/year)
   - https://developer.apple.com/programs/

2. **Create App Store Connect API Key**
   - App Store Connect → Users and Access → Keys
   - Create key with "App Manager" role
   - Download .p8 file (ONE TIME ONLY!)

3. **Add to Codemagic**
   - App settings → Code signing
   - Upload API key
   - Configure bundle ID

4. **Use Production Workflow**
   - Uncomment `ios-production-build` in `codemagic.yaml`
   - Update signing configuration
   - Build signed IPA

5. **TestFlight & App Store**
   - Automatic upload from Codemagic
   - Distribute to testers
   - Submit for review

---

## 📚 Full Documentation

- **Detailed Guide**: `IOS_BUILD_GUIDE.md`
- **Configuration**: `codemagic.yaml`
- **Codemagic Docs**: https://docs.codemagic.io
- **Capacitor Docs**: https://capacitorjs.com/docs

---

## ✅ Quick Checklist

- [ ] Code pushed to Git
- [ ] Codemagic account created
- [ ] App added to Codemagic
- [ ] First build started
- [ ] Build completed successfully
- [ ] Artifacts downloaded
- [ ] Email notification received
- [ ] Understand build limitations

---

## 🆘 Need Help?

- **Build logs**: Check first for errors
- **Codemagic support**: In-app chat
- **Community**: https://community.codemagic.io
- **Full guide**: Read `IOS_BUILD_GUIDE.md`

---

## 🎉 You're Ready!

Everything is configured. Just push your code and Codemagic will:
1. Detect changes
2. Start building automatically
3. Email you when done
4. Provide downloadable artifacts

**Start your first build now!** 🚀

---

Build with ❤️ using Codemagic + Capacitor