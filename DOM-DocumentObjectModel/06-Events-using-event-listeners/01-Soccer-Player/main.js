var soccerField = document.querySelector(".container")
var soccerPlayer = document.querySelector(".soccer-player");
var button = document.querySelector(".button");

function moveSoccerPlayer (event) {
    
    var horizontalMove = event.clientX;
    var verticalMove = event.clientY;
    soccerPlayer.style.position = "relative";
    soccerPlayer.style.left = horizontalMove + "px";
    soccerPlayer.style.top = verticalMove + "px" 

}

soccerField.addEventListener("click", moveSoccerPlayer);

button.addEventListener("click", function () {
    soccerField.removeEventListener("click", moveSoccerPlayer);
});