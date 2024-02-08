const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para estilizar páginas web.",
            "Uma linguagem de programação para criar aplicativos mobile.",
            "Uma linguagem de programação para tornar páginas web interativas."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita de valor e tipo.",
            "Comparação solta de valor, desconsiderando o tipo.",
            "Operação de adição."
        ],
        correta: 0
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "var nomeVariavel;",
            "let nomeVariavel = valor;",
            "const nomeVariavel = valor;"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de dado para armazenar apenas números.",
            "Um tipo de dado para armazenar apenas strings.",
            "Um tipo de dado para armazenar uma coleção de elementos de qualquer tipo."
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "log()",
            "display()"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um estilo de programação popular.",
            "Um modelo de objeto para interagir com elementos HTML.",
            "Um método de criptografia de dados."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a finalidade do comando 'if' em JavaScript?",
        respostas: [
            "Executar um bloco de código apenas se uma condição for verdadeira.",
            "Definir uma função.",
            "Realizar um loop."
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de dado para armazenar informações.",
            "Um conjunto de instruções para realizar uma tarefa específica.",
            "Uma variável global."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' ao declarar variáveis?",
        respostas: [
            "Não há diferença; podem ser usados indistintamente.",
            "let é usado para variáveis que não mudam, e const é usado para variáveis que podem ser alteradas.",
            "const é usado para variáveis que não mudam, e let é usado para variáveis que podem ser alteradas."
        ],
        correta: 2
    },
    {
        pergunta: "O que é um evento em JavaScript?",
        respostas: [
            "Um termo para bugs no código.",
            "Uma função que cria um loop infinito.",
            "Uma ação detectada pelo navegador, como o clique do mouse."
        ],
        correta: 2
    },
];


//console.log(perguntas[3].respostas[perguntas[0].correta])

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
 
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) =>  {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            } 
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas           
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //Coloca pergunta na tela
    quiz.appendChild(quizItem)
}