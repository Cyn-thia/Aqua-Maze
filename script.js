let char = document.querySelector('#character')
let leftPosition = 375;
let topPosition = 210;
let distance = 10;

// console.log(getComputedStyle(document.querySelector('.v-wall')).getPropertyValue("left"))
//console.log(document.querySelector('.v-wall').style.left)
window.addEventListener("keydown", move)

function move(event) {
  collision()
  if (event.keyCode == 39){
    leftPosition += distance;
    char.style.left = leftPosition + 'px';
    distance = 10
  } else if (event.keyCode == 37) {
    leftPosition += -distance;
    char.style.left = leftPosition + 'px';
  } else if (event.keyCode == 38) {
    topPosition += -distance;
    char.style.top = topPosition + 'px';
  } else if (event.keyCode == 40) {
    topPosition += distance;
    char.style.top = topPosition + 'px';
    char.rotate
  }
}

function collision() {
char.innerHTML = ` L: ${leftPosition} px<br>T: ${topPosition} px `;
if (topPosition > 375 && leftPosition >= 1000){
  alert('YOU WIN');
} else if (topPosition < 210 ||
  topPosition > 540 ||
  leftPosition > 515 && leftPosition < 620 && topPosition < 410 ||
  leftPosition > 770 && leftPosition < 825 && topPosition > 355 ||
  leftPosition < 420 && topPosition > 355 ||
  leftPosition > 970 && topPosition < 410
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
