# Easy CMS Populate

## About
The Kikora CMS is designed around authors populating cells to initialize a Google Sheet before updating the Google Sheet with content. Easy CMS Populate is a Google Chrome extension that automises the populating task using three parameters: `Course Id`, `Owner` and `numberOfRows`. 

## Demonstration

<img src="https://raw.githubusercontent.com/amoeedm/easy-cms/master/demo.gif">

## Installation

1. Make a local folder named `EasyCMS`.
2. Add the following the folder: `manifest.json`, `popup.html`, `popup.js`, `background.js`, `icon.png`, `style.css`.
3. Edit `API_KEY` in `background.js` according to instructions from Abdul.
4. Edit `key` and `client_id` in `manifest.json` according to instructions from Abdul.
5. Go to `chrome://extensions/` in the Chrome browser.
6. Click on the `Load unpacked extension` (Norwegian: `Last inn upakket`) and choose the local folder `EasyCMS`.
7. Look for the Kikora icon <img src="https://raw.githubusercontent.com/amoeedm/easy-cms/master/icon.png" width="20"> on your toolbar.
8. Enjoy!
