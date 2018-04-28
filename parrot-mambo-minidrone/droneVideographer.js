/* Parrot minidrone!! */

// Initialize the library
var Drone = require('parrot-minidrone');
var drone = new Drone({
    autoconnect: true,
});

function changeAltitude(drone, altitude, duration) {
  drone.setFlightParams({ altitude: altitude });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Move forward (pitch)
function moveForward(drone, pitch, duration) {
  drone.setFlightParams({ pitch: pitch });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Move backward (pitch)
function moveBackward(drone, pitch, duration) {
  drone.setFlightParams({ pitch: -pitch });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Move Left (roll)
function moveLeft(drone, roll, duration) {
  drone.setFlightParams({ roll: -roll });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Move Right (roll)
function moveRight(drone, roll, duration) {
  drone.setFlightParams({ roll: roll });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Spin left
function spinLeft(drone, yaw, duration) {
  drone.setFlightParams({ yaw: -yaw });
  return new Promise((resolve) => setTimeout(resolve, duration));
}

// Spin right
function spinRight(drone, yaw, duration) {
  drone.setFlightParams({ yaw: yaw });
  return new Promise((resolve) => setTimeout(resolve, duration));
}

// Flip front
function flipFront(drone) {
  drone.animate('flipFront');
  return new Promise((resolve) => setTimeout(resolve, 2500));
}

// Flip back
function flipBack(drone) {
  drone.animate('flipBack');
  return new Promise((resolve) => setTimeout(resolve, 2500));
}

// Flip right
function flipRight(drone) {
  drone.animate('flipRight');
  return new Promise((resolve) => setTimeout(resolve, 2500));
}

// Flip left
function flipLeft(drone) {
  drone.animate('flipLeft');
  return new Promise((resolve) => setTimeout(resolve, 2500));
}

// Clear all flight params back to zero
function pause(drone) {

  drone.setFlightParams({
    roll: 0,
    pitch: 0,
    yaw: 0,
    altitude: 0,
  });
  return new Promise(resolve => setTimeout(resolve, 3500));
}

var scene = [
{
  direction: "forward",
  amount: 25,
  duration: 3000,
  delivered: false
},
{
  direction: "up",
  amount: 30,
  duration: 5000,
  delivered: false 
},
{
  direction: "down",
  amount: 10,
  duration: 2000,
  delivered: false 
},
{
  direction: "clockwise",
  amount: 20,
  duration: 4000,
  delivered: false
},
{
  direction: "back",
  amount: 35,
  duration: 2000,
  delivered: false
},
{
  direction: "counterclockwise",
  amount: 35,
  duration: 4000,
  delivered: false 
}
]


if (drone) {

  drone.on('connected', () => drone.takeOff());
  setTimeout(async () => {
     
    for(var i = 0; i<scene.length; i++){

      if (scene[i].direction === "forward") {
        
        await moveForward(drone, scene[i].amount, scene[i].duration)

      } else if (scene[i].direction === "back") {

        await back(drone, scene[i].amount, scene[i].duration);

      } else if (scene[i].direction === "up") {

        await changeAltitude(drone, scene[i].amount, scene[i].duration);

      } else if (scene[i].direction === "down") {
        
        await spinLeft(drone, scene[i].amount, scene[i].duration);

      } else if (scene[i].direction === "clockwise") {

        await spinRight(drone, scene[i].amount, scene[i].duration);

      } else if (scene[i].direction === "counterclockwise") {
        
        await spinLeft(drone, scene[i].amount, scene[i].duration);
      }

      scene[i].delivered = true;

    }


    drone.land();
    process.exit();
  }, 6500);
}