 const firstText = document.getElementById("firstText");
firstText.innerHTML = "Nicolinas Page";
firstText.style.color = "Green";

// const firstButton = document.getElementById("firstButton");

const firstButton = document.querySelector("#firstButton");
firstButton.innerHTML = "Click me!";
firstButton.style.color = "pink";

firstButton.addEventListener('click', () => {
  console.log('button clicked!');
 });




