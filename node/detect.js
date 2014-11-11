var Bleacon = require('bleacon');


var handleBeaconDiscovery = function(beacon){
  if(beacon.uuid == 'b9407f30f5f8466eaff925556b57fe6d'){
    console.log('Major:', beacon.major, 'Minor:', beacon.minor, 'RSSI:', beacon.rssi);
  }
};


Bleacon.startScanning();
Bleacon.on('discover', handleBeaconDiscovery);
