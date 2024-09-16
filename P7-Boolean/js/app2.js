let playerTouchGround = false;

let playerHasJetPack = true;

if (playerTouchGround) {
  console.log("Player is on the ground");
  console.log("Player Can Jump");
}

else if (playerHasJetPack) {
  console.log("Player can Jet Away");
}

else {
  console.log("Player is NOT on the ground");
  console.log("Player CANNOT jump");
}

let buttonText;
if(isSubscribed) {
  buttonText = "Unsubscribe";}

else {buttonText = "Subscribe";}
console.log(buttonText)

//This can be changed to:
let buttonText = isSubscribed ? "Unsubscribe" : "Subscribe";
let result = condition ? thenValue : elseValue;
let greeting = hour < 12 ? "Good Morning!" : "Good Day!";

