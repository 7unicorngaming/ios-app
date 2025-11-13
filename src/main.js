import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";

// Configuration
const WEBSITE_URL = "https://usbett.com";
const TIMEOUT_MS = 15000; // 15 seconds

// DOM elements
let iframe;
let loading;
let errorScreen;
let retryBtn;

// Initialize app
document.addEventListener("DOMContentLoaded", async () => {
  console.log("USBett App starting...");

  // Get DOM elements
  iframe = document.getElementById("webview-frame");
  loading = document.getElementById("loading");
  errorScreen = document.getElementById("error");
  retryBtn = document.getElementById("retry-btn");

  // Setup event listeners
  setupEventListeners();

  // Configure native features
  await configureNativeFeatures();

  // Load website
  loadWebsite();
});

// Setup event listeners
function setupEventListeners() {
  // Iframe load event
  iframe.addEventListener("load", () => {
    console.log("Website loaded successfully");
    hideLoading();
    hideSplashScreen();
  });

  // Iframe error event
  iframe.addEventListener("error", () => {
    console.error("Failed to load website");
    showError();
    hideSplashScreen();
  });

  // Retry button
  retryBtn.addEventListener("click", () => {
    hideError();
    showLoading();
    loadWebsite();
  });

  // Handle app state changes
  if (Capacitor.isNativePlatform()) {
    App.addListener("appStateChange", ({ isActive }) => {
      console.log("App state changed. Active:", isActive);
    });

    // Handle back button on Android
    App.addListener("backButton", ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        App.exitApp();
      }
    });
  }

  // Handle loading timeout
  setTimeout(() => {
    if (!loading.classList.contains("hidden")) {
      console.warn("Loading timeout reached");
      showError();
      hideSplashScreen();
    }
  }, TIMEOUT_MS);
}

// Configure native features
async function configureNativeFeatures() {
  if (!Capacitor.isNativePlatform()) {
    console.log("Running in browser mode");
    return;
  }

  try {
    // Configure status bar
    await StatusBar.setStyle({ style: Style.Light });
    await StatusBar.setBackgroundColor({ color: "#1e3a8a" });

    console.log("Native features configured");
  } catch (error) {
    console.error("Error configuring native features:", error);
  }
}

// Hide splash screen
async function hideSplashScreen() {
  if (!Capacitor.isNativePlatform()) return;

  try {
    await SplashScreen.hide({
      fadeOutDuration: 300,
    });
    console.log("Splash screen hidden");
  } catch (error) {
    console.error("Error hiding splash screen:", error);
  }
}

// Load website
function loadWebsite() {
  console.log("Loading website:", WEBSITE_URL);

  // Check internet connectivity
  if (!navigator.onLine) {
    console.warn("No internet connection");
    showError();
    hideSplashScreen();
    return;
  }

  // Reload iframe
  iframe.src = WEBSITE_URL;
}

// Show loading screen
function showLoading() {
  loading.classList.remove("hidden");
  errorScreen.classList.remove("show");
}

// Hide loading screen
function hideLoading() {
  loading.classList.add("hidden");
}

// Show error screen
function showError() {
  loading.classList.add("hidden");
  errorScreen.classList.add("show");
}

// Hide error screen
function hideError() {
  errorScreen.classList.remove("show");
}

// Handle online/offline events
window.addEventListener("online", () => {
  console.log("Connection restored");
  if (errorScreen.classList.contains("show")) {
    hideError();
    showLoading();
    loadWebsite();
  }
});

window.addEventListener("offline", () => {
  console.log("Connection lost");
  showError();
});

// Log app info
if (Capacitor.isNativePlatform()) {
  App.getInfo().then((info) => {
    console.log("App Info:", info);
  });
}

console.log("Platform:", Capacitor.getPlatform());
console.log("Is Native:", Capacitor.isNativePlatform());
