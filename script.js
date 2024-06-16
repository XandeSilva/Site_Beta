const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  box.style.transform = `translateX(${-contador * 1900}px)`;
}

setInterval(slider, 2000);

//Fonte

let currentFontSize = 16;

function increaseFontSize() {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + 'px';
}

function decreaseFontSize() {
    currentFontSize -= 2;
    document.body.style.fontSize = currentFontSize + 'px';
}

function changeColorScheme() {
    const scheme = document.getElementById('colorBlindness').value;
    document.body.className = '';
    if (scheme !== 'normal') {
        document.body.classList.add(scheme);
    }
}


