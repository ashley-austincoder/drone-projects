var { DroneConnection, CommandParser } = require('pdrone-low-level');

var parser = new CommandParser();
var drone = new DroneConnection();

//commands
var takeoff = parser.getCommand('minidrone', 'Piloting', 'TakeOff');
var landing = parser.getCommand('minidrone', 'Piloting', 'Landing');
var openClaw = parser.getCommand('minidrone', 'UsbAccessory', 'ClawControl', { action: "OPEN" });
var closeClaw = parser.getCommand('minidrone', 'UsbAccessory', 'ClawControl', { action: "CLOSE" });
var forward = parser.getCommand('minidrone', 'Piloting', 'PCMD', { pitch: 50 });
var back = parser.getCommand('minidrone', 'Piloting', 'PCMD', { pitch: -50 });
var spinRight = parser.getCommand('minidrone', 'Piloting', 'PCMD', { yaw: 50 });
var left = parser.getCommand('minidrone', 'Piloting', 'PCMD', { roll: -50 });
var right = parser.getCommand('minidrone', 'Piloting', 'PCMD', { roll: 50 });
var spinLeft = parser.getCommand('minidrone', 'Piloting', 'PCMD', { yaw: -50 });
var backFlip = parser.getCommand('minidrone', 'Animations', 'Flip', { direction: 'back' });
var frontFlip = parser.getCommand('minidrone', 'Animations', 'Flip', { direction: 'front' });
var pause = parser.getCommand('minidrone', 'Piloting', 'PCMD', { roll: 0, pitch: 0, yaw: 0, altitude: 0 });
var runCommand = x => drone.runCommand(x);


// go up and down the block, delivering marshmallows to everyone on the block

drone.on('connected', () => {

  runCommand(takeoff);

  setTimeout(runCommand, 3000, openClaw);
  setTimeout(runCommand, 4000, closeClaw);
  setTimeout(runCommand, 4000, forward);
  setTimeout(runCommand, 7000, pause);
  

  setTimeout(runCommand, 8000, landing);
  setTimeout(process.exit, 20000);
});