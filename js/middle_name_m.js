
var myTxt2 = new Array(
'<textarea readonly >Олександрович</textarea>',
'<textarea readonly >Олегович</textarea>',
'<textarea readonly >Максимович</textarea>',
'<textarea readonly >Дмитрович</textarea>',
'<textarea readonly >Павлович</textarea>',
'<textarea readonly >Владиславович</textarea>',
'<textarea readonly >Володимирович</textarea>',
'<textarea readonly >Сергійович</textarea>',
'<textarea readonly >Євгенійович</textarea>',
'<textarea readonly >Юрійович</textarea>',
'<textarea readonly >Олексійович</textarea>',
'<textarea readonly >Ілліч</textarea>',
'<textarea readonly >Іванович</textarea>',
'<textarea readonly >Васильович</textarea>',
'<textarea readonly >Віталійович</textarea>',
'<textarea readonly >Петрович</textarea>'
                                           );
randnm=Math.round(Math.random()*(myTxt2.length-1));

document.getElementById("middle_name_m").innerHTML = myTxt2[randnm];
