// Using those two prints, make a character:
// walk three steps forward.
walkThreeSteps();

// then turn around and walk three steps forward
turnAround();
walkThreeSteps();

// then turn left and walk three steps forward.
turnLeft ();
walkThreeSteps ();

// then turn left and walk one step forward.
turnLeft();
stepForward ();

// then turn around and walk one step forward
turnAround ();
stepForward ();

// console.log("Move Forward");
// console.log("Turn Right");

function stepForward() {
  console.log("Move Forward");

}

function turnRight() {
  console.log("Turn Right");
}

function turnLeft() {
  turnRight();
  turnRight();
  turnRight();
}

function walkThreeSteps () {
  stepForward();
  stepForward();
  stepForward();
}

function turnAround() {
  turnRight();
  turnLeft();
}
