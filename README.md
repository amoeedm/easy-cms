# Easy CMS Populate

## About
The Kikora CMS is designed around authors populating cells to initialize a Google Sheet before updating the Google Sheet with content. Easy CMS Populate is a Google Chrome extension that automises the populating task using three parameters: `Course Id`, `Owner` and `numberOfRows`. 

## Demonstration

<img src="https://raw.githubusercontent.com/amoeedm/easy-cms/master/demo.gif">

## Installation

1. Make a local folder named `EasyCMS`.
2. Add the following the folder: `manifest.json`, `popup.html`, `popup.js`, `background.js`, `icon.png`, `style.css`.
3. Edit `API_KEY` in `background.js` according to <a href="https://tinyurl.com/EasyCMSDetails">notes.txt</a>.
4. Edit `key` and `client_id` in `manifest.json` according to <a href="https://tinyurl.com/EasyCMSDetails">notes.txt</a>.
5. Go to `chrome://extensions/` in the Chrome browser.
6. Enable `Developer mode` (Norwegian: `Utviklermodus`).
7. Click on the `Load unpacked extension` (Norwegian: `Last inn upakket`) and choose the local folder `EasyCMS`.
8. Look for the Kikora icon <img src="https://raw.githubusercontent.com/amoeedm/easy-cms/master/icon.png" width="20"> on your toolbar.
9. Enjoy! Happy authoring.

## Tips and tricks

You can permanently change the default values of the extension by editing `popup.html`. For example, changing `abdul@kikora.no` to your own e-mail and changing `20` to your preferred intial number of exercises can increase your user experience.

## Troubleshooting

The extension assumes the following:
* All three fields are non-empty prior to population. 
* The current tab open is a `Load Exercises CREATE` Google Sheet.

Users are notified with alerts when they disregard the assumptions.
