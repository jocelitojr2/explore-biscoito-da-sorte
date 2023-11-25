// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const biscoito = document.querySelector("#biscoito");
const btnReset = document.querySelector("#btnReset");
const paragraphSentence = document.querySelector(".container-phrase p");
let randomNumber = Math.round(Math.random() * 8);
const phrases = [
  "Sonhos são caminhos construídos pelo coração.",
  "Impossível é uma palavra que serve só de enfeite no dicionário.",
  "Você é beleza, luz e força.",
  "Dias nublados guardam o sol atrás deles.",
  "Um dia bonito começa com um barril de esperança e um café de otimismo.",
  "Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.",
  "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.",
  "Tenha coragem para se tornar aquilo que sonha.",
  "Resista àqueles dias que querem esconder tudo de bom que já fizemos até hoje."
]

// Eventos
biscoito.addEventListener('click', breakCookie);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleEnter)

// funções
function breakCookie() {
  toggleScreen()
  createARandomSentence()
}

function createARandomSentence() {
  const phrase = phrases[randomNumber];

  paragraphSentence.innerText = phrase;

  setTimeout(paragraphSentenceStyle(), "100");
}

function paragraphSentenceStyle() {
  paragraphSentence.style.marginBottom = "";
  paragraphSentence.style.transform = "";

  setTimeout(() => {
    paragraphSentence.style.marginBottom = "0";
    paragraphSentence.style.transform = "scale(1)";
  }, "100");
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 8);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick();
  } else if (e.key == 'Enter' && screen2.classList.contains("hide")) {
    breakCookie();
  }
}