var arDrone = require('ar-drone');
var drone = arDrone.createClient();

var speed1 = .8;
var speed2 = .3;
var speed3 = .3;

drone.takeoff();


drone.after(1000, function() {
  //after 1 second, go up at speed1
    drone.up(speed1); 
  })
  .after(6000, function() {
  //after 4 seconds, go forward at speed2
    drone.front(speed2);
  })
  .after(3000, function() {
  //after 4 seconds, go left at speed3
    drone.stop(speed3);
  })
  .after(2000, function() {
    drone.land();
  });



/* DRONE NAVIGATION OPTIONS
    speed is a value from 0 to 1
    drone.up(speed);
    drone.down(speed);
    drone.front(speed);
    drone.back(speed);
    drone.left(speed);
    drone.right(speed);
    drone.clockwise(speed);
    drone.counterClockwise(speed);

*/
