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

function moveForwardandBackward() {

  return new Promise (async (resolve) => {

    await moveForward(drone, 20, 3000);
    await pause(drone);
    await moveBackward(drone, 20, 3000);
    await pause(drone);
    resolve();

  });
}

function moveLeftAndRight() {

  return new Promise (async (resolve) => {

    await moveLeft(drone, 20, 3000);
    await pause(drone);
    await moveRight(drone, 20, 3000);
    await pause(drone);

    resolve();
  });
}
//Student TODO
  // create another function like this one that combines 
  // several drone moves from above


if (drone) {
  drone.on('connected', () => drone.takeOff());
  setTimeout(async () => {
     
      await moveForwardandBackward();
      await moveLeftAndRight();
      //call your new functions here


    drone.land();
    process.exit();
  }, 3500);
}