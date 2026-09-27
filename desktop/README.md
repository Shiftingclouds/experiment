# Heldwater desktop app (Windows)

Wraps `dist/heldwater.html` in its own window with Electron.

```bash
npm install
npm start          # run it in a window (Linux/Mac/Windows)
npm run dist:win   # build release/Heldwater.exe (portable, no installer)
```

The .exe is unsigned, so Windows SmartScreen will warn the first time:
click **More info → Run anyway**.
