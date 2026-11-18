const fs = require("node:fs");
const path = require("node:path");

exports.config = {
   runner: "local",
   specs: ["../test/specs/**/*.spec.js"],
   // Jalankan sebagian test: `wdio run ... --suite login`
   suites: {
      login: ["../test/specs/login.spec.js"],
      register: ["../test/specs/register.spec.js"],
   },
   maxInstances: 1,

   // Capabilities: "KTP" device & app yang mau dites, dikirim ke Appium
   capabilities: [
      {
         platformName: "Android",
         "appium:automationName": "UiAutomator2",
         // Kosong = Appium pilih device yang terhubung; isi UDID kalau ada lebih dari 1 device
         "appium:udid": process.env.UDID,
         "appium:app": path.resolve(__dirname, "../apps", process.env.APP_NAME ?? "PracticeMart-v0.2.1-debug.apk"),
         "appium:autoGrantPermissions": true,
         "appium:appWaitActivity": "*",
         // Ganti ke 0 hanya saat debug dengan browser.debug()
         "appium:newCommandTimeout": 240,
         "appium:noReset": true,
      },
   ],

   logLevel: "info",
   waitforTimeout: 10000,
   connectionRetryCount: 2,

   // appium-service: start/stop server Appium otomatis, tidak perlu buka terminal terpisah
   services: [["appium", { args: { address: "127.0.0.1", port: 4723 }, logPath: "./logs" }]],

   framework: "mocha",
   reporters: ["spec"],
   mochaOpts: { ui: "bdd", timeout: 120000 },

   onPrepare() {
      // Hapus hasil run sebelumnya supaya isi logs/ hanya dari run ini
      fs.rmSync("logs", { recursive: true, force: true });
      fs.mkdirSync("logs", { recursive: true });
   },

   async afterTest(test, context, { passed }) {
      if (!passed) await driver.saveScreenshot(`./logs/${`${test.parent}_${test.title}`.replace(/\W+/g, "_")}.png`);
   },
};
