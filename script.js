let char = document.querySelector('#character')
let leftPosition = 925;
let topPosition = 215;
let distance = 10;
let left = []
let vWalls = document.querySelectorAll('.v-wall')
// let startTop =
// let startLeft = document.querySelector('#box6').getBoundingClientRect().left


//when page loads, assign character's position relative to the start box. found.getBoundingClientRect here: https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
// char.onload = function () {charStart()}

// function charStart () {
//   char.style.top = topPosition;
//   char.style.left = leftPosition;

// // }

// charStart()

function findWalls () {
  for(i=0; i<vWalls.length; i++){

console.log(getComputedStyle(vWalls[i]).getPropertyValue("left"))
  }
}



// console.log(getComputedStyle(document.querySelector('.v-wall')).getPropertyValue("left"))
//console.log(document.querySelector('.v-wall').style.left)
window.addEventListener("keydown", move)

function move(event) {
  collision()
  if (event.keyCode == 39){
    leftPosition += distance;
      // collision()
    char.style.left = leftPosition + 'px';
    distance = 10;
    char.style.background = "url('/Users/cynthia/wdi/unit01/projects/Uni1-1-Project-Maze/images/solo scuba.gif')"
    char.style.width = "100px"
    char.style.height = "61px"
    console.log(leftPosition);
    console.log(topPosition);
  } else if (event.keyCode == 37) {
    leftPosition += -distance;
      // collision()
    char.style.left = leftPosition + 'px';
    distance = 10;
    char.style.background = "url('/Users/cynthia/wdi/unit01/projects/Uni1-1-Project-Maze/images/solo scuba left.gif')"
    char.style.width = "100px"
    char.style.height = "61px"
    console.log(leftPosition);
    console.log(topPosition);
  } else if (event.keyCode == 38) {
    topPosition += -distance;
      // collision()
    char.style.top = topPosition + 'px';
    distance = 10;
    char.style.backgroundImage = "url('/Users/cynthia/wdi/unit01/projects/Uni1-1-Project-Maze/images/solo scuba up.gif')";
    char.style.width = "81px"
    char.style.height = "83px"
    console.log(leftPosition);
    console.log(topPosition);
  } else if (event.keyCode == 40) {
    topPosition += distance;
      // collision()
    char.style.top = topPosition + 'px';
    distance = 10;
    char.style.backgroundImage = "url('/Users/cynthia/wdi/unit01/projects/Uni1-1-Project-Maze/images/solo scuba down.gif')";
    char.style.width = "81px"
    char.style.height = "83px"
    console.log(leftPosition);
    console.log(topPosition);
  }
}

function collision() {
// char.innerHTML = ` L: ${leftPosition} px<br>T: ${topPosition} px `;
if (topPosition > 375 && leftPosition >= 1000){
  alert('YOU WIN');
} else if (topPosition < 210) {
  alert('Wrong Way!')
    distance = -10
} else if (leftPosition > 940 || // maze right
  leftPosition < 395 || //maze left
  topPosition > 560 || //maze bottom
  leftPosition < 615 && leftPosition > 515 && topPosition < 300 || //box2 right
  topPosition > 280 && topPosition < 320 && leftPosition > 635 || //box7 right
  leftPosition > 636 && leftPosition < 705 && topPosition > 285 && topPosition < 525 || //box9 right
  topPosition < 425 && topPosition > 350 && leftPosition > 425 && leftPosition < 635 //box14 top

 ) {
  alert("That's a wall, silly!")
  distance = -10
}}


// console.log(window.getComputedStyle(vWall, null).getPropertyValue("left"))
//topPosition, leftPosition
// cannot be left between 565 - 625 & top 215 - 415
// let walls = [
// [215, 565]
// ]
