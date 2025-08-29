# Gmail Dark Souls Extension

A Chrome extension that replaces Gmail's boring "Message sent" notification with a dramatic Dark Souls-style overlay.

## What It Does

When you send an email in Gmail, instead of seeing the small "Message sent" banner, you get a full-screen Dark Souls-style overlay with your custom image.

## Installation

### Step 1: Download the Extension
- Download or clone this repository to your computer
- Make sure you have these files:
  - `manifest.json`
  - `content.js`
  - `style.css`
  - `assets/email_sent.png` (your custom image)

### Step 2: Enable Developer Mode in Chrome
1. Open Chrome and go to `chrome://extensions/`
2. Turn on "Developer mode" (toggle in top-right corner)

### Step 3: Load the Extension
1. Click "Load unpacked" button
2. Select the folder containing your extension files
3. The extension should now appear in your extensions list

## How to Use

1. **Go to Gmail** in Chrome
2. **Compose and send an email** as usual
3. **Watch the magic happen!** Your Dark Souls overlay will appear for 3 seconds

## Features

- ✅ Works with every email you send
- ✅ Custom image display
- ✅ Smooth Dark Souls-style animation
- ✅ No interference with Gmail functionality

## Customization

### Change the Image
- Replace `assets/email_sent.png` with your own image
- Recommended size: 800x600 pixels or similar
- Format: PNG, JPG, or GIF

### Adjust Animation Duration
- Edit `content.js` and change `3000` to your preferred duration (in milliseconds)

## Troubleshooting

**Extension not working?**
- Make sure Developer mode is enabled
- Reload the extension in `chrome://extensions/`
- Check that all files are in the correct folder

**Image not showing?**
- Verify `email_sent.png` exists in the `assets` folder
- Check the file name matches exactly

## Files Explained

- `manifest.json` - Extension configuration
- `content.js` - Main functionality (detects email sends)
- `style.css` - Visual styling and animations
- `assets/email_sent.png` - Your custom image

## Uninstall

1. Go to `chrome://extensions/`
2. Find "Gmail Dark Souls Email Sent"
3. Click "Remove"

---

**Enjoy your epic Gmail experience!** 🗡️ 