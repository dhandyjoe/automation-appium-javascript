# automation-appium-javascript

Mobile automation test untuk aplikasi Android **PracticeMarket**, memakai WebdriverIO + Appium (UiAutomator2) + Mocha.

Aplikasi yang dites berasal dari repo [dhandyjoe/PracticeMarket.apps](https://github.com/dhandyjoe/PracticeMarket.apps), hasil dari vibe coding.

## Persiapan

1. Install Node.js dan Android SDK, lalu nyalakan emulator atau sambungkan device (`adb devices`).
2. Taruh APK di folder `apps/` (default: `apps/PracticeMart-v0.2.1-debug.apk`, ganti lewat env `APP_NAME`).
3. Install dependency (Appium dan driver UiAutomator2 ikut terpasang):

   ```bash
   npm install
   ```

## Menjalankan test

```bash
npm run test:android   # semua test
npm run test:login     # hanya login
```

Lebih dari satu device: `UDID=emulator-5554 npm run test:android`.

Log Appium dan screenshot test yang gagal tersimpan di `logs/`.

## Struktur

```
config/          konfigurasi WebdriverIO
test/specs/      skenario test
test/screens/    Screen Object (locator & aksi per layar)
test/data/       data test
```
