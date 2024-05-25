const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'undertale-undertale-memes',
    'aranha',
    'sans-dance',
    'frisk2',
    'papyrus',
    'flower',
    'determination',
    'undyne',
    'ghost',
    'toriel',
    'metatton',
    'hearts',
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;

}

let firstCard = '';
let secondCard = '';
let currentTimer = 0;
let intervalId;


const checkEndGame = () =>{

    const disabledCards = document.querySelectorAll('.disabled-card');
    finalTime = currentTimer;

    if(disabledCards.length === 24){

        setTimeout(() => {
            clearInterval(this.loop);
            clearInterval(intervalId);
            alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${finalTime}`);
        }, 500);
        
    }

}

const checkCards = () => {

    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter){

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else{

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 800);
    }

}

const revealCard = ({ target }) =>{

    if (target.parentNode.className.includes('reveal-card')){
        target.parentNode.classList.add('reveal-card');
        return;
    }
    
    if( firstCard === ''){
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

    }else if (secondCard === ''){
        target.parentNode.classList.add('reveal-card'); 
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (character) =>{

const card = createElement('div', 'card');
const front = createElement('div', 'face front');
const back = createElement('div', 'face back');

front.style.backgroundImage = `url('../images/${character}.gif')`;

card.appendChild(front);
card.appendChild(back);

card.addEventListener('click', revealCard);

card.setAttribute('data-character', character)

return card;

}

const loadGame = () =>{

    const duplicateCharacters = [...characters, ...characters ]  //aqui peguei os arrays dos characters do primeiro array e dupliquei/espalhei neste

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5); //sort consegue alinhar os elementos em ordem alfabetica mas irei passar uma funcao que irá rertornar aleatoriamente um número maior ou menor que zero para ocorrer a aleatoriedade

    shuffledArray.forEach((character) => {
        
        const card = createCard(character);
        grid.appendChild(card);

    });
}

let finalTime = 0;
const startTimer = () =>{
    let currentTimer = 0;   
this.loop = setInterval(() => {
        currentTimer++;
        finalTime = currentTimer
        timer.innerHTML = `tempo: ${currentTimer}`;
    }, 1000);
}

window.onload= () => {     //quando tudo da 'janela' (página) tiver sido carregado, ele vai disparar a ação, que geralmente é uma função do JavaScript

    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}
 