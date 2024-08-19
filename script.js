// script.js
const matrix = document.getElementById('matrix');
const columnSpacing = 10; // Distância horizontal entre as colunas
const rowSpacing = 20; // Distância vertical entre os caracteres
const columns = Math.floor(window.innerWidth / columnSpacing); // Número de colunas
const characters = '10'; // Apenas números 1 e 0
const dropSpeed = 1; // Controla a velocidade de descida

let drops = [];
let columnsChars = []; // Array para armazenar a quantidade de caracteres em cada coluna

for (let i = 0; i < columns; i++) {
    drops[i] = 0; // Começa a partir do topo
    columnsChars[i] = Math.floor(Math.random() * 3) + 3; // Aleatoriamente entre 3 e 5 caracteres
}

function drawMatrix() {
    matrix.innerHTML = ''; // Limpa o quadro anterior

    for (let i = 0; i < drops.length; i++) {
        for (let j = 0; j < columnsChars[i]; j++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            const text = document.createTextNode(char);
            const span = document.createElement('span');
            span.appendChild(text);
            matrix.appendChild(span);

            span.style.position = 'absolute';
            span.style.left = `${i * columnSpacing}px`; // Ajusta a posição horizontal
            span.style.top = `${(drops[i] + j) * rowSpacing}px`; // Ajusta a posição vertical

            if (drops[i] + j > window.innerHeight / rowSpacing) {
                // Ajusta a posição quando a coluna atinge a parte inferior
                span.style.top = `${(drops[i] + j - Math.floor(window.innerHeight / rowSpacing)) * rowSpacing}px`;
            }
        }

        drops[i] += dropSpeed; // Aumenta a posição vertical com base na velocidade

        if (drops[i] * rowSpacing > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0; // Reinicia a posição da coluna com chance aleatória
            columnsChars[i] = Math.floor(Math.random() * 3) + 3; // Aleatoriamente entre 3 e 5 caracteres
        }
    }
}

// Aumente o intervalo para diminuir a velocidade da animação
setInterval(drawMatrix, 70); // Aumentado de 33ms para 70ms

