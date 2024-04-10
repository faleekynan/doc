
document.getElementById('generateScreenshotButton').addEventListener('click', function() {
    var input4Preview = document.getElementById('input4-preview');
	var country = document.getElementById('country');
    var text = input4Preview.textContent;

    if (text.includes('united state')) {
        // Змінюємо координати або виконуємо інші дії, які вам потрібно
        // Наприклад, змінюємо координати елемента input4Preview
		country.style.top = '27rem';
        input4Preview.style.top = '29rem';
    }
});


var backgrounds = [
  'img/rand_back1.png',
  'img/rand_back2.png',
  'img/rand_back3.png',
  'img/rand_back4.png'
  
];

var overlays = [
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.png',
  'img/6.png',
  'img/7.png',
  'img/8.png'
];

var noBackgrounds = [];
for (var i = 1; i <= 146; i++) {
  noBackgrounds.push('no_bg/img' + i + '.png');
}

function setBackground(index) {
  var mainDiv = document.getElementById('fon');
  mainDiv.style.backgroundImage = 'url(' + backgrounds[index] + ')';
}



function setPhoto(path) {
  var photoDiv = document.getElementById('photo');
  photoDiv.innerHTML = '<img id="photoImg" src="' + path + '" alt="photo">';
 
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function getRandomBirthDate(minAge, maxAge) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var minYear = currentYear - maxAge;
  var maxYear = currentYear - minAge;
  var randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  var randomMonth = Math.floor(Math.random() * 12) + 1;
  var randomDay = Math.floor(Math.random() * (new Date(randomYear, randomMonth, 0).getDate())) + 1;
  return new Date(randomYear, randomMonth - 1, randomDay);
}

// Задаємо випадковий фон при завантаженні сторінки
setBackground(getRandomIndex(backgrounds.length));




// Отримуємо елементи DOM
var photoInput = document.getElementById('photoInput');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var input1Preview = document.getElementById('input1-preview');
var input2Preview = document.getElementById('input2-preview');
var input3Preview = document.getElementById('input3-preview');
var input4Preview = document.getElementById('input4-preview');
var input5Preview = document.getElementById('input5-preview');

// Генеруємо та встановлюємо випадкову дату народження за замовчуванням
var defaultBirthDate = getRandomBirthDate(18, 35);
var formattedDefaultDate = defaultBirthDate.toLocaleDateString();
input3.value = ""; // Порожнє значення для інпуту
input3Preview.textContent = formattedDefaultDate; // Встановлюємо дату в спан

// Генеруємо та встановлюємо випадкове фото за замовчуванням
var defaultPhotoIndex = getRandomIndex(noBackgrounds.length);
setPhoto(noBackgrounds[defaultPhotoIndex]);

// Оновлюємо значення span з введеними значеннями інпутів
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('#inputs input');

    inputs.forEach(function(input, index) {
        var span = document.createElement('span');
        span.classList.add('category_text');
        span.id = 'input' + (index + 1) + '-preview';
        input.parentNode.insertBefore(span, input.nextSibling);
        
        input.addEventListener('input', function() {
            // Перевіряємо, чи це не input з id "photoInput"
            if (input.id !== "photoInput") {
                document.getElementById('input' + (index + 1) + '-preview').textContent = this.value;
                
                // Перевіряємо, чи це input4 і дублюємо його значення в input5-preview
                if (index === 3) {
                    document.getElementById('input5-preview').textContent = this.value;
                }
            }
        });
    });
});





 // Базовий шлях до папки зображень
    var basePath = 'flags/';

    // Отримуємо елемент контейнера зображення
    var imageContainer = document.getElementById('imageContainer');

    // Отримуємо випадаючий список
    var selectElement = document.getElementById('imageSelect');

    // Додаємо обробник події для випадаючого списку
    selectElement.addEventListener('change', function() {
      // Отримуємо вибране значення зі списку
      var selectedValue = this.value;

      // Складаємо повний шлях до зображення
      var imagePath = basePath + selectedValue + '.png';

      // Вставляємо зображення у контейнер
      imageContainer.innerHTML = '<img src="' + imagePath + '" alt="Image">';
    });




// Додаємо подію 'input' до інпуту 3
input3.addEventListener('input', function(event) {
  var value = event.target.value.trim(); // Отримуємо значення інпуту 3 та видаляємо зайві пробіли
  input3Preview.textContent = value; // Оновлюємо попередній перегляд
});

// Додаємо подію 'change' до інпуту файлу
photoInput.addEventListener('change', function(event) {
  var file = event.target.files[0]; // Отримуємо перший вибраний файл
  if (file) {
    // Якщо файл вибраний, отримуємо URL зображення та встановлюємо його
    var reader = new FileReader();
    reader.onload = function(event) {
      setPhoto(event.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    // Якщо файл не вибраний, встановлюємо випадкове фото з no_bg
    defaultPhotoIndex = getRandomIndex(noBackgrounds.length);
    setPhoto(noBackgrounds[defaultPhotoIndex]);
  }
});

// Функція для генерації рандомного числа з вказаною кількістю цифр
function getRandomNumber(digits) {
  var min = Math.pow(10, digits - 1);
  var max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}









// Отримуємо випадаючий список
var selectElement = document.getElementById('backgroundSelect');

// Додаємо обробник події 'change' до випадаючого списку
selectElement.addEventListener('change', function() {
    // Отримуємо значення вибору
    var selectedValue = this.value;

    // Отримуємо елемент фону
    var backgroundElement = document.getElementById('fon');

    // Встановлюємо фон відповідно до вибраного значення
    if (selectedValue === 'rand_back1') {
        backgroundElement.style.backgroundImage = 'url("img/rand_back1.png")';
    } else if (selectedValue === 'rand_back2') {
        backgroundElement.style.backgroundImage = 'url("img/rand_back2.png")';
    } else if (selectedValue === 'rand_back3') {
        backgroundElement.style.backgroundImage = 'url("img/rand_back3.png")';
    } else if (selectedValue === 'rand_back4') {
        backgroundElement.style.backgroundImage = 'url("img/rand_back4.png")';
    } else {
        // Якщо значення не відповідає вказаним, можна встановити фон за замовчуванням або не робити нічого
        backgroundElement.style.backgroundImage = 'url("img/rand_back1.png")';
    }
});
























// Отримуємо елементи DOM для спанів
var span6 = document.getElementById('random6');
var span12 = document.getElementById('random12');

// Генеруємо рандомні числа
var random6 = getRandomNumber(6);
var random12 = getRandomNumber(12);

// Виводимо рандомні числа в спан
span6.textContent = random6;
span12.textContent = random12;

var genderOutput = document.getElementById('genderOutput');

// Отримуємо всі радіобатони з іменем "gender"
var genderRadios = document.querySelectorAll('input[type="radio"][name="gender"]');

// За замовчуванням обираємо другий радіобатон
genderRadios[1].checked = true;
genderOutput.textContent = 'Female';

// Додаємо подію "change" для кожного радіобатону
genderRadios.forEach(function(radio) {
  radio.addEventListener('change', function() {
    if (this.checked) {
      // Встановлюємо значення в спан залежно від вибраного радіобатона
      genderOutput.textContent = (this.value === 'male') ? 'Male' : 'Female';
    }
  });
});

// Отримуємо елемент спана для виведення дати на 10 років більше
var tenYearsLaterSpan = document.getElementById('tenYearsLater');

// Функція для обчислення дати на 10 років більше
function getDateTenYearsLater(date) {
  var tenYearsLater = new Date(date);
  tenYearsLater.setFullYear(tenYearsLater.getFullYear() + 10);
  return tenYearsLater.toLocaleDateString();
}

// Виводимо дату на 10 років більше у спані
tenYearsLaterSpan.textContent = getDateTenYearsLater(defaultBirthDate);

// Функція для додавання шуму до зображення
function addNoiseToImage(img, noiseLevel) {
  // Отримуємо контекст канви зображення
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  // Отримуємо дані пікселів зображення
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  // Нормалізуємо рівень шуму
  var noiseFactor = noiseLevel * 255 / 100;

  // Додаємо шум до кожного пікселя
  for (var i = 0; i < data.length; i += 4) {
    data[i] += Math.random() * noiseFactor - noiseFactor / 2; // Червоний
    data[i + 1] += Math.random() * noiseFactor - noiseFactor / 2; // Зелений
    data[i + 2] += Math.random() * noiseFactor - noiseFactor / 2; // Синій
  }

  // Поновлюємо зображення з новими даними пікселів
  ctx.putImageData(imageData, 0, 0);

  // Повертаємо об'єкт Image з новими даними
  var noisyImg = new Image();
  noisyImg.src = canvas.toDataURL();
  return noisyImg;
}

// Отримуємо елемент з класом "content"
var contentElement = document.querySelector('#divToScreenshot');

// Отримуємо елемент кнопки "generateScreenshotButton"
var generateButton = document.getElementById('generateScreenshotButton');

// Додаємо обробник події для кнопки
generateButton.addEventListener('click', function() {
    // Генеруємо скріншот елементу з класом "content"
    domtoimage.toPng(contentElement)
        .then(function(dataUrl) {
            // Створюємо новий об'єкт Image
            var img = new Image();
            img.onload = function() {
                // Додаємо шум до зображення
                var noisyImg = addNoiseToImage(img, 10); // Наприклад, шум рівнем 10%
                
                // Отримуємо елемент, в який ми хочемо вставити зображення
                var screenshotResult = document.getElementById('screenshotResult');
                
                // Очищаємо вміст елементу
                screenshotResult.innerHTML = '';
                
                // Додаємо зображення до елементу
                screenshotResult.appendChild(noisyImg);

                // Створюємо кнопку для завантаження фото
                var downloadButton = document.createElement('a');
                downloadButton.href = noisyImg.src;
                downloadButton.download = 'doc.png';
                downloadButton.textContent = 'Скачать фото';
				
                
                // Додаємо кнопку до елементу
                screenshotResult.appendChild(downloadButton);
            };
            img.src = dataUrl;
        })
        .catch(function(error) {
            console.error('Помилка генерації скріншоту:', error);
        });
});


var generateButton = document.getElementById('generateScreenshotButton');

generateButton.addEventListener('click', function() {
    // Відображення тексту "Завантаження..."
    generateButton.textContent = 'Создаю фото...';

    // Встановлюємо таймер на дві секунди
    setTimeout(function() {
        // Після двох секунд змінюємо текст кнопки на початковий
        generateButton.textContent = 'Генерировать';
    }, 2000);

    // Тут ви виконуєте необхідні дії для генерації скріншоту
});

 // Отримуємо canvas та контекст
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Встановлюємо розмір canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Функція для генерації випадкового числа в діапазоні
    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Функція для малювання рандомних ліній
    function drawRandomLines() {
        // Очищаємо canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Кількість ліній, які ми хочемо нарисувати
        var numLines = 20;

        // Малюємо кожну лінію
        for (var i = 0; i < numLines; i++) {
            // Генеруємо випадкові координати для початку та кінця лінії
            var startX = randomRange(0, canvas.width);
            var startY = randomRange(0, canvas.height);
            var endX = randomRange(0, canvas.width);
            var endY = randomRange(0, canvas.height);

            // Генеруємо випадковий колір для лінії
            var color = 'rgba(128, 128, 128, 0.25)'; // сірий колір з прозорістю 30%


            // Малюємо лінію
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }

    // Викликаємо функцію для малювання рандомних ліній
    drawRandomLines();
	
	window.addEventListener('load', function() {
    document.body.style.overflowX = 'hidden'; // Заборона горизонтальної прокрутки
});