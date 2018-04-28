var arDrone = require('ar-drone');
var drone = arDrone.createClient();


drone.takeoff();

drone.after(1000, function() {
    drone.up(.75); 
  });

/*
  While loops
*/

var wasFound = false;
var seconds = 1000;

while(!wasFound) {

  drone.right(startingSpeed)
    .after(seconds, function(){
      drone.right(.5);
    })
    .after(seconds, function(){
      drone.front(.5);
    })
    .after(seconds, function(){
      drone.left(.5);
    })
    .after(seconds, function(){
      drone.back(.5);
    });

    //random num between 0 and 9
    var randomNumber = Math.round(Math.random()*10);

    if(randomNumber === 0){
      wasFound = true;
    }

    seconds = seconds + 1000;
}

drone.after(2000, function(){
  drone.stop();
  //TODO: Add take a picture?

  })
  .after(2000, function(){
    drone.land();
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