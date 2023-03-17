
var myTxt2 = new Array(
'<textarea readonly >Олександрівна</textarea>',
'<textarea readonly >Олегівна</textarea>',
'<textarea readonly >Максимівна</textarea>',
'<textarea readonly >Дмитрівна</textarea>',
'<textarea readonly >Павлівна</textarea>',
'<textarea readonly >Владиславівна</textarea>',
'<textarea readonly >Володимирівна</textarea>',
'<textarea readonly >Сергіївна</textarea>',
'<textarea readonly >Євгенівна</textarea>',
'<textarea readonly >Юріївна</textarea>',
'<textarea readonly >Олексіївна</textarea>',
'<textarea readonly >Ілівна</textarea>',
'<textarea readonly >Іванівна</textarea>',
'<textarea readonly >Василівна</textarea>',
'<textarea readonly >Віталіївна</textarea>',
'<textarea readonly >Петрівна</textarea>'
                                           );
randnm=Math.round(Math.random()*(myTxt2.length-1));

document.getElementById("middle_name").innerHTML = myTxt2[randnm];
