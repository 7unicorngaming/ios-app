/**
 * USBett App Configuration
 *
 * Centralized configuration for easy customization
 */

const APP_CONFIG = {
  // Website Configuration
  website: {
    url: 'https://www.usbets.com',
    name: 'USBett',
    description: 'Legal US Online Casinos & Sports Betting',
  },

  // App Identity
  app: {
    name: 'USBett',
    packageId: 'com.usbett.app',
    version: '1.0.0',
  },

  // Visual Configuration
  branding: {
    primaryColor: '#1a1a1a',
    backgroundColor: '#ffffff',
    statusBarStyle: 'dark', // 'light' or 'dark'
    logoText: 'USB', // Text shown on loading screen
  },

  // Behavior Configuration
  behavior: {
    loadingTimeout: 15000, // 15 seconds in milliseconds
    splashDuration: 2000,  // 2 seconds
    enablePullToRefresh: true,
    enableBackButton: true, // Android
  },

  // Feature Flags
  features: {
    offlineDetection: true,
    errorScreen: true,
    loadingScreen: true,
    statusBarCustomization: true,
  },

  // External Links Behavior
  links: {
    openExternal: false, // Open external links in system browser
    allowedDomains: [
      'usbets.com',
      'www.usbets.com',
    ],
  },

  // Security
  security: {
    allowMixedContent: true,
    enableWebViewDebugging: true, // Set false for production
  },
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_CONFIG;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
  window.APP_CONFIG = APP_CONFIG;
}
