# automation-appium-javascript

Mobile automation tests for the Android app **PracticeMarket**, using WebdriverIO + Appium (UiAutomator2) + Mocha.

The app under test comes from the [dhandyjoe/PracticeMarket.apps](https://github.com/dhandyjoe/PracticeMarket.apps) repo, built with vibe coding.

## Setup

1. Install Node.js and the Android SDK, then start an emulator or connect a device (`adb devices`).
2. Put the APK in the `apps/` folder (default: `apps/PracticeMart-v0.2.1-debug.apk`, override with the `APP_NAME` env var).
3. Install dependencies (Appium and the UiAutomator2 driver are included):

   ```bash
   npm install
   ```

## Running tests

```bash
npm run test:android   # all tests
npm run test:login     # login only
```

More than one device connected: `UDID=emulator-5554 npm run test:android`.

The Appium log and screenshots of failed tests are saved in `logs/`.

## Structure

```
config/          WebdriverIO config
test/specs/      test scenarios
test/screens/    Screen Objects (locators & actions per screen)
test/data/       test data
```
