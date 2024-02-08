/*const perguntas = [
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
];*/


const perguntas = [
    {
        pergunta: "Qual é o principal objetivo do aconselhamento em psicologia?",
        respostas: [
            "A) Diagnóstico de doenças mentais",
            "B) Promover o autoconhecimento e o desenvolvimento pessoal",
            "C) Prescrição de medicamentos psicotrópicos",
        ],
        correta: 1
    },
    {
        pergunta: "Qual abordagem terapêutica se concentra na identificação e modificação de pensamentos negativos?",
        respostas: [
            "A) Psicanálise",
            "B) Terapia Cognitivo-Comportamental",
            "C) Gestalt-terapia",
        ],
        correta: 1
    },
    {
        pergunta: "O que é empatia no contexto do aconselhamento psicológico?",
        respostas: [
            "A) Desinteresse pelas emoções do cliente",
            "B) Compreensão e compartilhamento das emoções do cliente",
            "C) Manipulação das emoções do cliente",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são as fases típicas de um processo de aconselhamento?",
        respostas: [
            "A) Introdução, conclusão e feedback",
            "B) Exploração, compreensão e ação",
            "C) Avaliação, diagnóstico e prescrição",
        ],
        correta: 2
    },
    {
        pergunta: "O que é a transferência na psicanálise?",
        respostas: [
            "A) Troca de informações entre cliente e terapeuta",
            "B) Projeção de sentimentos do cliente sobre o terapeuta",
            "C) Interação social fora do consultório",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a importância do rapport no aconselhamento psicológico?",
        respostas: [
            "A) Criar uma atmosfera de confiança e conexão",
            "B) Diagnosticar rapidamente os problemas do cliente",
            "C) Impor autoridade ao terapeuta",
        ],
        correta: 0
    },
    {
        pergunta: "O que significa a sigla HIPAA no contexto da privacidade em saúde nos Estados Unidos?",
        respostas: [
            "A) Health Information Privacy and Accountability Act",
            "B) Human Insight and Personalized Analysis Act",
            "C) Helping Individuals with Psychological Assistance and Awareness",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o papel do consentimento informado no aconselhamento psicológico?",
        respostas: [
            "A) Documentar as sessões de terapia",
            "B) Obter permissão ética do cliente antes do tratamento",
            "C) Diagnosticar doenças mentais",
        ],
        correta: 1
    },
    {
        pergunta: "O que caracteriza a abordagem humanista no aconselhamento?",
        respostas: [
            "A) Foco na modificação de comportamentos",
            "B) Valorização da autoatualização e crescimento pessoal",
            "C) Ênfase na análise do inconsciente",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são as habilidades essenciais de um bom terapeuta?",
        respostas: [
            "A) Diagnóstico preciso e prescrição de medicamentos",
            "B) Empatia, escuta ativa e habilidades de comunicação",
            "C) Autoridade e controle sobre o cliente",
        ],
        correta: 1
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