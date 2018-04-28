var arDrone = require('ar-drone');
var client = arDrone.createClient();


client.takeoff();


var windDirection = Math.random();
var windSpeed = Math.random();
var fireHeight = Math.random();

/*
  windDirection
    write an if/else if statement that will handle the fire going in any direction
  0-.249    North
  .25-.499  East
  .5-.749   South
  .75-5     West

  fireHeight
    multiply fireHeight by 10000 to determine how many seconds needed 
    to go up to clear the fire
  
  windSpeed
    make the drone match your windSpeed, whichever direction you go by using the windSpeed variable
*/

var upSeconds = fireHeight * 10000;

client.after(1000, function() {
    this.up(1); 
  })
  .after(upSeconds, function() {
    //north
    if(windDirection < .25) {
      this.front(windSpeed);
    } 
    //east 
    else if (.25 < windDirection < .5) {
      this.right(windSpeed);
    } 
    //south
    else if (.5 < windDirection < .75) {
      this.front(windSpeed);
    }
    //west
    else {
      this.right(windSpeed);
    }
  })
  .after(2000, function() {
  //after 4 seconds, go left at speed3
    this.left(speed3);
  })
  .after(2500, function(){
  //after 2.5 seconds, stop/hover
    this.stop();
  })
  .after(2000, function() {
    this.land();
  });


/*
  DRONE NAVIGATION OPTIONS
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