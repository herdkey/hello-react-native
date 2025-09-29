const iosApp = ({ isDebug }) => {
  const config = isDebug ? 'Debug' : 'Release';
  return {
    [`ios.${config.toLowerCase()}`]: {
      type: 'ios.app',
      binaryPath: `ios/build/Build/Products/${config}-iphonesimulator/helloreactnative.app`,
      build: `xcodebuild -workspace ios/helloreactnative.xcworkspace -scheme helloreactnative -configuration ${config} -sdk iphonesimulator -derivedDataPath ios/build`,
    },
  };
};

const androidApp = ({ isDebug }) => {
  const config = isDebug ? 'Debug' : 'Release';
  const configLower = config.toLowerCase();
  return {
    [`android.${config}`]: {
      type: 'android.apk',
      binaryPath: `android/app/build/outputs/apk/${configLower}/app-${configLower}.apk`,
      build: `cd android && ./gradlew assemble${config} assembleAndroidTest -DtestBuildType=${configLower}`,
      ...(isDebug ? { reversePorts: [8081] } : {}),
    },
  };
};

/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  artifacts: {
    plugins: {
      log: 'failing',
      screenshot: 'failing',
      video: 'none',
      uiHierarchy: 'none',
    },
  },
  apps: {
    ...iosApp({ isDebug: true }),
    ...iosApp({ isDebug: false }),
    ...androidApp({ isDebug: false }),
    ...androidApp({ isDebug: true }),
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 17',
      },
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_30_x86',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug',
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
  },
};
