window.onload = function() {
  let fn_ua = document.querySelector('.fn_ua');
  let fn_en = document.querySelector('.fn_en');
  let ln_ua = document.querySelector('.ln_ua');
  let ln_en = document.querySelector('.ln_en');
  
  var src = document.getElementById("birth"),
        dst = document.getElementById("rec");
  
  fn_en.addEventListener('input', function() {
    fn_ua.value = translit(this.value);
  });
  fn_ua.addEventListener('input', function() {
    fn_en.value = translit1(this.value);
  });
  
  ln_en.addEventListener('input', function() {
    ln_ua.value = translit(this.value);
  });
  ln_ua.addEventListener('input', function() {
    ln_en.value = translit1(this.value);
  });
  
  
    src.addEventListener('input', function() {
        dst.value = src.value;
    });
  
  
};