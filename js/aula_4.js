/*
"for" é utilizada para criar um loop, ou seja, para repetir um bloco de código várias vezes.
A estrutura do "for" é composto por três partes:

Inicialização => Criar uma variável e um valor (é comum essa variável, nesse caso especifico ser chamada de "i");

Condição de continuação => Definição até quando o loop deve repetir, uma vez que essa condição seja true (verdadeira).

Incremento ou expressão final => Configuração do que deve acontecer sempre que o laço encerrar.

ex: for ([Inicialização]; [Condição de continuação]; [Incremento ou expressão final]) {
    Seu código aqui
}

obs: O LENGTH é usado para definir o tamanho de uma string, ou seja, os elementos dentro uma array.
    (A array é o nome que damos a variável que armazena vários elementos,
    Como uma sequência numérica, ou lista de usuários)
*/

let family = ["Silas", "Rute", "Ruan", "Ladja"]

for (let i = 0; i < family.length; i++) {
    console.log(family[i])
}