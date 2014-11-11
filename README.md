# Todo
* Phonegap Advertiser
* Phonegap Detector
* Node Advertiser
* Node Detector
* Write Readme
* Rename phonegap project


# Running the Phonegap Applications
1. Ensure you have a valid developer profile and can deploy to real devices. If you can't do this, please ask me for help
2. Install the [cordova cli](https://github.com/apache/cordova-cli) - `npm install cordova -g`
3. Clone this repo
4. `cd` into the phonegap dir
5. Add ios as a valid platform - `cordova platforms add ios`
6. Add the iBeacon phonegap plugin - `cordova plugin add https://github.com/petermetz/cordova-plugin-ibeacon.git`
7. Build using `cordova run`
8. Change the content `src` property in `/phonegap/config.xml` to different HTML files to test beacon advertising or monitoring.
