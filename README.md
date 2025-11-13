# USBett Mobile App 📱

A mobile application wrapper for [usbett.com](https://www.usbets.com) built with Capacitor. This app provides a native mobile experience for accessing legal US online casinos, sports betting information, and gambling guides.

## 🎯 Features

- **Native Mobile Wrapper**: Wraps the USBett website in a native mobile app
- **Cross-Platform**: Works on both iOS and Android
- **Splash Screen**: Custom branded splash screen
- **Status Bar Styling**: Native status bar integration
- **Back Button Handling**: Native Android back button support
- **Offline Detection**: Shows error screen when offline
- **Loading States**: Professional loading and error states

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Android Studio** (for Android development) - [Download](https://developer.android.com/studio)
- **Xcode** (for iOS development, macOS only) - [Download](https://developer.apple.com/xcode/)

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Web Assets

```bash
npm run build
```

### 3. Add Platforms

#### For Android:
```bash
npm run add:android
```

#### For iOS (macOS only):
```bash
npm run add:ios
```

### 4. Sync Capacitor

After adding platforms, sync the web assets with the native projects:

```bash
npm run sync
```

## 🛠️ Development

### Run in Browser (Development Mode)

```bash
npm run dev
```

This will start a development server at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Sync Changes to Native Projects

After making changes to the web assets:

```bash
npm run sync
```

Or sync specific platforms:

```bash
npm run sync:android
npm run sync:ios
```

## 📱 Building Native Apps

### Android

1. Open Android Studio:
```bash
npm run open:android
```

2. In Android Studio:
   - Wait for Gradle sync to complete
   - Connect an Android device or start an emulator
   - Click the "Run" button (green play icon)

3. Build APK/AAB:
   - Go to **Build → Build Bundle(s) / APK(s)**
   - Choose **Build APK(s)** for testing or **Build Bundle** for Play Store

### iOS (macOS only)

1. Open Xcode:
```bash
npm run open:ios
```

2. In Xcode:
   - Select your development team in Signing & Capabilities
   - Choose a target device or simulator
   - Click the "Play" button to run

3. Build for App Store:
   - Go to **Product → Archive**
   - Follow the prompts to upload to App Store Connect

## 📁 Project Structure

```
usbett/
├── android/              # Android native project
├── ios/                  # iOS native project
├── dist/                 # Built web assets (generated)
├── src/
│   └── main.js          # Main JavaScript with Capacitor logic
├── resources/           # App icons and splash screens
├── public/              # Static assets
├── index.html           # Main HTML file with WebView
├── capacitor.config.ts  # Capacitor configuration
├── vite.config.js       # Vite build configuration
└── package.json         # Project dependencies
```

## 🎨 Customization

### Change Website URL

Edit `src/main.js` and update the `WEBSITE_URL` constant:

```javascript
const WEBSITE_URL = 'https://www.usbets.com';
```

### Update App Name and Package ID

Edit `capacitor.config.ts`:

```typescript
const config: CapacitorConfig = {
  appId: 'com.usbett.app',     // Change this
  appName: 'USBett',            // Change this
  webDir: 'dist'
};
```

### Customize Colors

Edit `index.html` to change:
- Loading screen colors
- Status bar color (also in `capacitor.config.ts`)
- Theme color in meta tag

## 🖼️ App Icons & Splash Screen

### Generate Icons

1. Place your app icon (1024x1024 PNG) in `resources/icon.png`
2. Place your splash screen (2732x2732 PNG) in `resources/splash.png`

3. Generate platform-specific assets:

```bash
npx capacitor-assets generate
```

Or install the tool first:
```bash
npm install -g @capacitor/assets
capacitor-assets generate
```

### Manual Icon Setup

Place your icons in:
- **Android**: `android/app/src/main/res/`
- **iOS**: `ios/App/App/Assets.xcassets/`

## 🔧 Troubleshooting

### Issue: "Cleartext HTTP traffic not permitted"

**Solution**: The app is configured to allow HTTPS. If you need HTTP, update `capacitor.config.ts`:

```typescript
android: {
  allowMixedContent: true,
}
```

### Issue: Iframe not loading on iOS

**Solution**: Check that the website allows embedding. Some sites block iframes with X-Frame-Options headers.

### Issue: Back button not working

**Solution**: Make sure the App plugin is properly initialized in `src/main.js`

### Issue: App crashes on Android

**Solution**: Check Android Studio Logcat for errors. Common issues:
- Gradle sync failures
- Missing permissions in AndroidManifest.xml
- WebView compatibility issues

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build web assets |
| `npm run preview` | Preview production build |
| `npm run sync` | Sync web assets to native projects |
| `npm run sync:android` | Sync to Android only |
| `npm run sync:ios` | Sync to iOS only |
| `npm run add:android` | Add Android platform |
| `npm run add:ios` | Add iOS platform |
| `npm run open:android` | Open Android Studio |
| `npm run open:ios` | Open Xcode |
| `npm run copy` | Copy web assets to native projects |
| `npm run update` | Update Capacitor dependencies |

## 🔐 Security Considerations

- The iframe uses `sandbox` attribute for security
- HTTPS is enforced by default
- External links open in system browser
- No sensitive data is stored locally

## 📄 License

ISC

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For issues related to:
- **USBett Website**: Visit [www.usbets.com](https://www.usbets.com)
- **Capacitor**: [Capacitor Documentation](https://capacitorjs.com/docs)
- **This App**: Open an issue in this repository

## 🌟 Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Capacitor Plugins](https://capacitorjs.com/docs/plugins)
- [Android Development](https://developer.android.com/)
- [iOS Development](https://developer.apple.com/)
- [Vite Documentation](https://vitejs.dev/)

---

**Built with ❤️ using Capacitor**