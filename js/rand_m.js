// Javascript
var images = [
  './no_bg_m/1.jpeg',
'./no_bg_m/2.jpeg',
];

document.getElementById("my_button").addEventListener("click", function() {
  document.getElementById("preview").src = images[Math.floor(Math.random()*images.length)]
})
document.getElementById("my_button_").addEventListener("click", function() {
  document.getElementById("preview").src = images[Math.floor(Math.random()*images.length)]
})