const questions = [
    {
        question: "Qual é a montanha mais alta do mundo?",
        options: ["Monte Everest", "K2", "Kangchenjunga", "Makalu"],
        answer: "Monte Everest"
    },
    {
        question: "Em que país fica a famosa Torre de Pisa?",
        options: ["França", "Espanha", "Itália", "Grécia"],
        answer: "Itália"
    },
    {
        question: "Qual é o maior país do mundo em área territorial?",
        options: ["China", "Canadá", "Estados Unidos", "Rússia"],
        answer: "Rússia"
    },
    {
        question: "Onde ficam as pirâmides de Gizé?",
        options: ["México", "Egito", "Sudão", "Peru"],
        answer: "Egito"
    },
    {
        question: "Qual país é conhecido como a 'Terra do Sol Nascente'?",
        options: ["Japão", "Coreia do Sul", "Vietnã", "China"],
        answer: "Japão"
    },
    {
        question: "Qual é o menor país do mundo?",
        options: ["Mônaco", "Nauru", "Vaticano", "San Marino"],
        answer: "Vaticano"
    },
    {
        question: "Em que país o futebol foi inventado (na sua forma moderna)?",
        options: ["Brasil", "Alemanha", "Inglaterra", "Argentina"],
        answer: "Inglaterra"
    },
    {
        question: "Qual destes países não faz fronteira com o Brasil?",
        options: ["Colômbia", "Chile", "Argentina", "Suriname"],
        answer: "Chile"
    },
    {
        question: "Qual é a capital da Austrália?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Qual rio é o mais longo do mundo?",
        options: ["Rio Nilo", "Rio Amazonas", "Rio Mississippi", "Rio Yangtze"],
        answer: "Rio Amazonas"
    }
];

const imagens = [
    'https://picsum.photos/id/10/1920/1080',
    'https://picsum.photos/id/11/1920/1080',
    'https://picsum.photos/id/12/1920/1080',
    'https://picsum.photos/1920/1080/'

];

let indiceAtual = 0;
const elementoBkg = document.getElementById('banner');
const tempoTroca = 5000;

function trocarFundo() {
    elementoBkg.style.backgroundImage = `url('${imagens[indiceAtual]}')`;
    indiceAtual = (indiceAtual + 1) % imagens.length;
}

trocarFundo();
setInterval(trocarFundo, tempoTroca);