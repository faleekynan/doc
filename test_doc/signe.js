var path = 'img/';
var imgs = [
   '1.png',
   '2.png',
   '3.png',
   '4.png',
   '5.png',
   '6.png',
   '7.png',
   '8.png'
];
var i = Math.floor(Math.random() * imgs.length);

var signe = document.getElementById('signe');
var img = document.createElement('img');
img.className = 'items';
img.src = path + imgs[i];
signe.appendChild(img);
