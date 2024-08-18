import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.padelution.app',
  appName: 'Padelution',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
