// Contador
const incrementBtn = document.getElementById('incrementBtn');
const counterDisplay = document.getElementById('counterDisplay');
let count = 0;
let increment = 1;

incrementBtn.addEventListener('click', () => {
    count += increment;
    counterDisplay.textContent = count;

    if (count >= 10) increment = 3;
    else if (count >= 5) increment = 2;

    if (count >= 100) incrementBtn.disabled = true;
});

// Transformar Texto
const textInput = document.getElementById('textInput');
textInput.addEventListener('blur', () => {
    textInput.value = textInput.value.toUpperCase();
});

// Imagen Hover 
const hoverImage = document.getElementById('hoverImage');
const defaultImage = 'https://www.cbr.com/wp-content/uploads/2019/12/mirio-face.jpg';
const alternateImage = 'https://www.nahsvikingsaga.org/wp-content/uploads/2020/11/DEKU.png';

hoverImage.addEventListener('mouseenter', () => {
    hoverImage.src = alternateImage;
});

hoverImage.addEventListener('mouseleave', () => {
    hoverImage.src = defaultImage;
});

// Font Size 
const increaseFontBtn = document.getElementById('increaseFontBtn');
const decreaseFontBtn = document.getElementById('decreaseFontBtn');
const sampleText = document.getElementById('sampleText');
let fontSize = 16;
const MIN_SIZE = 16;
const MAX_SIZE = 32;

increaseFontBtn.addEventListener('click', () => {
    if (fontSize < MAX_SIZE) {
        fontSize += 2;
        sampleText.style.fontSize = `${fontSize}px`;
    }
});

decreaseFontBtn.addEventListener('click', () => {
    if (fontSize > MIN_SIZE) {
        fontSize -= 2;
        sampleText.style.fontSize = `${fontSize}px`;
    }
});