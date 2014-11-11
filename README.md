## Beacon Terminology
* Advertise - Broadcast your location
* Monitor - Get notified when you're in rane of a beacon
* Range - Determine the distance of a beacon


## Beacon Names
The 12 beacons listed below will be available for the beacon hack day (**Beacon Name** Major-Minor).  
* **Marco Polo** 33055-7126
* **Columbus** 62149-58709
* **Cortes** 46571-62467
* **Magellan** 24950-46272
* **Lewis** 31104-7682
* **Clark** 7450-14826
* **Cartier** 2359-14929
* **Sacagawea** 15817-22964
* **Armstrong** 53462-54030
* **de Gama** 1682-1349
* **Livingstone** 10878-4585
* **Dora** 59106-31240


## Running the Phonegap Applications
1. Ensure you have a valid developer profile and can deploy to real devices. If you can't do this, please ask me for help
2. Install the [cordova cli](https://github.com/apache/cordova-cli) - `npm install cordova -g`
3. Clone this repo
4. `cd` into the phonegap dir
5. Add ios as a valid platform - `cordova platforms add ios`
6. Add the iBeacon phonegap plugin - `cordova plugin add https://github.com/petermetz/cordova-plugin-ibeacon.git`
7. Add the estimote phonegap plugin `cordova plugin add https://github.com/divineprog/phonegap-estimotebeacons.git`
8. Build using `cordova run`
9. Change the content `src` property in `/phonegap/config.xml` to different HTML files to test beacon advertising, monitoring, or ranging.


## Helpful Apps
* [Particle Detector](https://itunes.apple.com/us/app/particle-detector/id724226138?mt=8)
* [Estimote](https://itunes.apple.com/us/app/estimote/id686915066?mt=8)


## Helpful Links
* [Node Bleacons](https://github.com/sandeepmistry/node-bleacon)
* [Phonegap iBeacon Plugin](https://github.com/petermetz/cordova-plugin-ibeacon)
* [Phonegap Estimote Plugin](https://github.com/divineprog/phonegap-estimotebeacons)
