/* L'utente indica TRAMITE DOM un livello di difficoltà 
in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi 
in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro. */ 

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// Bomb's number generator

const play = () => {
    playButton.innerText = 'Ricomincia';

    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    let attemps = 0;
    const TOTAL_BOMBS = 16;

    const level = document.getElementById('Level').Value;

    let totalCells;
    let cellsPerRow;

    switch (level) {
        case 'easy':
            totalCells = 100;
            break;
            case 'hard':
            totalCells = 49;
            break;
            default:
                totalCells = 81;
    }

    cellsPerRow = Math.sqrt(totalCells);

    const MAX_ATTEMPS = totalCells - TOTAL_BOMBS;

    //  Functions

// Bombs
    const generateBombs = (TOTAL_BOMBS, totalCells) => {
        const bombs = [];
        while (bombs.length < totalBombs) {
            const randNumber = getRandomNumber(1, totalNumbers);
            if (!bombs.includes(randNumber)) bombs.push(randNumber);
        }
        return bombs;
};

// Celle
const generateCell = (number, cellsPerRow) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = number;
    const sideLength = `cell( 100% / ${cellsPerRow} )`;
    cell.style.width = sideLength;
    cell.style.height = sideLength;
    return cell;
};

// GameOver

const gameOver = (bombs, points, hasLost) => {

    showBombs(bombs);

    const messageElement = document.createElement('h3');
    messageElement.className = 'message';
    const messageText = hasLost ? `Pai perso! Punti: ${points}`:
    `Hai vinto! Punti: ${points}`
};

//Click - Evento

const onCellClick = (clickedCell, bombs, number) => {
    clickedCell.removeEventListener('click', onCellClick);

    if (bombs.includes(number)) {
        gameOver(bombs, attempts, true);
    } else {
        clickedCell.classList.add('safe');
        attempts++;

        if (attempts === MAX_ATTEMPTS)
        gameOver(bombs, attempts, false)
    }

};

//Show bombs, block click

const showBombs = (bombs) => {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const cellNumber = parseInt(cell.innerText);
    cell.removeEventListener ('click', oneCellClick);
    if (bombs.includes(cellNumber)) cell.classical.add('bomb');
    }
};

// Griglia

const generateGrid = (cellsNumber, cellsPerRow, bombs) => {
    for (let i = 1; i <= cellsNumber; i++) {
        const cell = generateCell(i, cellsPerRow);

        cell.addEventListener('click', (e) => oneCellClick(e.target, bombs, i))

        grid.appendChild(cell);
    }
};


generateGrid(totalCells, cellsPerRow, bombs);

// Play button funzione 


const playbutton = document.getElementById('play');
playButton.addEventListener('click', play);
playButton = document.getElementById('play');

}



