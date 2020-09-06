
// javascript for button to scroll:
const scrollButton = document.querySelector("#scrollButton");


scrollButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});



const timerText = document.getElementById("timer-text");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");

let count = 0;

let alertMessage;



// flashing color:
var contactFlash = setInterval(setColor, 300);

function setColor() {
  var random = document.getElementById("Contact");
  random.style.backgroundColor = random.style.backgroundColor == "black" ? "orange" : "black";
}

function stopColor() {
  clearInterval(contactFlash);
}