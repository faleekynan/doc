
var path = './img/',
    imgs = [
   '1.png',
   '2.png',
   '3.png',
   '4.png',
   '5.png',
   '6.png',
   '7.png',
   '8.png'
 ],
    i = Math.floor(Math.random()*imgs.length);
$('#signe').append("<img class='items' src='"+path+imgs[i]+"'>");                  