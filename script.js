let char = document.querySelector('#character')
let leftPosition = 925;
let topPosition = 215;
let distance = 10;
let left = []
let vWalls = document.querySelectorAll('.v-wall')

document.querySelector('button').addEventListener("click", play)

function play(){
  document.querySelector('#landing').className = 'hide';
}

//
window.addEventListener("keydown", move)

// function for what happens each time a key is pressed
function move(event) {
  collision()

// right key
  if (event.keyCode == 39){
    leftPosition += distance;
    char.style.left = leftPosition + 'px';
    distance = 10;
    char.style.background = "url('/Users/cynthia/wdi/unit01/projects/Uni1-1-Project-Maze/images/solo scuba.gif')"
    char.style.width = "100px"
    char.style.height = "61px"

// left key
  } else if (event.keyCode == 37) {
    leftPosition += -distance;
    char.style.left = leftPosition + 'px';
    distance = 10;
    char.style.background = "url('/Users/cynthia/wdi/unit01/projects/Uni1-1-Project-Maze/images/solo scuba left.gif')"
    char.style.width = "100px"
    char.style.height = "61px"

// up key
  } else if (event.keyCode == 38) {
    topPosition += -distance;
    char.style.top = topPosition + 'px';
    distance = 10;
    char.style.backgroundImage = "url('/Users/cynthia/wdi/unit01/projects/Uni1-1-Project-Maze/images/solo scuba up.gif')";
    char.style.width = "81px"
    char.style.height = "83px"

// down key
  } else if (event.keyCode == 40) {
    topPosition += distance;
    char.style.top = topPosition + 'px';
    distance = 10;
    char.style.backgroundImage = "url('/Users/cynthia/wdi/unit01/projects/Uni1-1-Project-Maze/images/solo scuba down.gif')";
    char.style.width = "81px"
    char.style.height = "83px"
  }
}


//function for collision detection with maze walls
function collision() {
if (topPosition > 530 && leftPosition > 950){
  alert('YOU WIN');

} else if (leftPosition > 840 && topPosition < 200) {
  alert('Wrong Way!')
  distance = -10
} else if (leftPosition < 840 && topPosition < 210 || // maze top
  leftPosition > 940 && topPosition < 526 || // maze right
  leftPosition < 395 || //maze left
  topPosition > 560 || //maze bottom
  leftPosition < 615 && leftPosition > 525 && topPosition < 300 || //box2 right
  leftPosition > 635 && topPosition > 280 && topPosition < 320 || //box7 right
  leftPosition > 636 && leftPosition < 705 && topPosition > 285 && topPosition < 525 || //box9 right
  leftPosition > 435 && leftPosition < 635 && topPosition > 350 && topPosition < 425 || //box14 top
  leftPosition > 425 && leftPosition < 600 && topPosition > 455 && topPosition < 536 || //box 14 bottom
  leftPosition > 525 && leftPosition < 600 && topPosition > 455 ||  //box20 right
  leftPosition > 735 && leftPosition < 810 && topPosition > 375 || //box16 right
  leftPosition > 735 && leftPosition < 840 && topPosition > 375 && topPosition < 425 || //box11 bottom
  leftPosition > 845 && topPosition > 455 && topPosition < 526 //box24 top
 ) {
  alert("That's a wall, silly!")
  distance = -10

}}

