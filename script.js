let char = document.querySelector('#character')
let leftPosition = 375;
let topPosition = 210;
let distance = 10;
let wall = false;

// console.log(getComputedStyle(document.querySelector('.v-wall')).getPropertyValue("left"))
//console.log(document.querySelector('.v-wall').style.left)
window.addEventListener("keydown", move)

function move(event) {
   if (event.keyCode == 39 && wall == false){
     collision()
     if(wall == false){
     leftPosition += distance;
     char.style.left = leftPosition + 'px';}
   } else if (event.keyCode == 37 && wall == false) {
     collision ()
     if(wall == false){
     leftPosition += -distance;
     char.style.left = leftPosition + 'px';}
   } else if (event.keyCode == 38 && wall == false) {
    collision()
    if(wall == false){
    topPosition += -distance;
     char.style.top = topPosition + 'px';}
  } else if (event.keyCode == 40 && wall == false) {
    collision()
    if(wall == false){
    topPosition += distance;
    char.style.top = topPosition + 'px';
  }
wall = false
}}

function collision() {
char.innerHTML = ` L: ${leftPosition} px<br>T: ${topPosition} px `;
if (topPosition > 375 && leftPosition >= 1000){
  alert('YOU WIN');
} else if (topPosition < 210 ||
  topPosition > 560 ||
  leftPosition > 565 && leftPosition < 620 && topPosition < 410 ||
  leftPosition > 770 && leftPosition < 825 && topPosition > 355 ||
  leftPosition < 420 && topPosition > 355 ||
  leftPosition > 970 && topPosition < 410
  ) {
  alert('thats a wall dummy')
wall = true
}}


// console.log(window.getComputedStyle(vWall, null).getPropertyValue("left"))
//topPosition, leftPosition
// cannot be left between 565 - 625 & top 215 - 415
// let walls = [
// [215, 565]
// ]
