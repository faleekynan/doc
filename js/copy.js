window.onload = function() {
  var src = document.getElementById("main_row"),
      date = document.getElementById("date");
        en = document.getElementById("en");
       ru = document.getElementById("ru");
       rec = document.getElementById("record_row");
	   
  src.addEventListener('input', function() {
	  date.value = src.value;
        en.value = src.value;
        ru.value = src.value;
        rec.value = src.value;
		
    });
	
	var name = document.getElementById("name");
	    surname = document.getElementById("surname");
		bir_date = document.getElementById("bir_date");
	    paste_name = document.getElementById("paste_name");
		paste_surname = document.getElementById("paste_surname");
		paste_date = document.getElementById("paste_date");
		
	    en_paste_name = document.getElementById("en_paste_name");
		en_paste_surname = document.getElementById("en_paste_surname");
		reverse_bir_date = document.getElementById("reverse_bir_date");
		
      
  name.addEventListener('input', function() {
	paste_name.value = name.value;
	en_paste_name.value = name.value;
    });
  surname.addEventListener('input', function() {
	paste_surname.value = surname.value;
	en_paste_surname.value = surname.value;
	});
  bir_date.addEventListener('input', function() {
	paste_date.value = bir_date.value;
	reverse_bir_date.value = bir_date.value;
    });
	
  
  main_row.addEventListener('input', function() {
    en.value = translitRuEn(this.value);
  });
  main_row.addEventListener('input', function() {
    ru.value = translitRuRu(this.value);
  });
  main_row.addEventListener('input', function() {
    date.value = translitRu0(this.value);
  });
  main_row.addEventListener('input', function() {
    rec.value = translitRu0(this.value);
  });
  
  name.addEventListener('input', function() {
    en_paste_name.value = translitRuEn(this.value);
  });
  surname.addEventListener('input', function() {
    en_paste_surname.value = translitRuEn(this.value);
  });
bir_date.addEventListener('input', function() {
    paste_date.value = translitRu0(this.value);
	reverse_bir_date.value = translitRu0(this.value);
  });
  
  
};

document.getElementById('main_row').addEventListener('input', function(e){
	e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split('	').join('\n');
    e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split(' ').join('\n');
});

    
main_row.addEventListener('input', function() {
    record_row.value = translit2(this.value);
  });
 

