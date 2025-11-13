import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.usbett.app",
  appName: "USBett",
  webDir: "dist",
  server: {
    androidScheme: "https",
    iosScheme: "https",
    hostname: "usbett.app",
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: false,
      backgroundColor: "#1e3a8a",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: "LIGHT",
      backgroundColor: "#1e3a8a",
    },
    App: {
      handleBackButton: true,
    },
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true,
  },
  ios: {
    contentInset: "automatic",
    allowsLinkPreview: false,
  },
};

export default config;
