/* Parrot minidrone!! */

// Initialize the library
var Drone = require('parrot-minidrone');
var drone = new Drone({ autoconnect: true });

function changeAltitude(drone, altitude, duration) {
  drone.setFlightParams({ altitude: altitude });
  return new Promise(resolve => setTimeout(resolve, duration));
}

function landAndDisconnectDrone(drone){
  drone.land();
  process.exit();
}

/* Task: build an array of distance values and make the drone do each one of them in a loop */

var altitudeArr = [25, -10, 15, -15, 25, -20, 20, 5, -10, 10];

if (drone) {
  drone.on('connected', () => {
    drone.takeOff();

    setTimeout(async () => {
      try {
        // Note: had issues with the forEach, just do for right now
        for (var i=0; i<altitudeArr.length; i++) {
          await changeAltitude(drone, altitudeArr[i], 2000);
        }

        landAndDisconnect(drone);
        
      } catch(err) {
        console.log('Error occurred: ', err);
        landAndDisconnect(drone);
      }
    }, 6500);
  });
}
