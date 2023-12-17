/*
"for" é utilizada para criar um loop, ou seja, para repetir um bloco de código várias vezes.
O laço "for" é composto por três partes:

Inicialização => Criar uma variavel e um valor (é comum essa variavel, nesse caso especifico ser chamada de "i");
Condição de continuação => Cofiguração pra essa variavel manter a execussão, enquanto essa condição for true (verdadeira).
Incremento ou expressão final => Configuração do que deve acontecer sempre que o laço acontcer.

ex: for ([Inicialização]; [Condição de continuação]; [Incremento ou expressão final]) {
    seu codigo aqui
}

obs: O LENGTH é usado para definir o tamanho de um string, seja por caracteres ou elementos dentro uma array.
    (a array é o nome que damos a variavel que armazena varios elementos,
    como uma sequencia numerica, ou lista de usuarios)
    
*/

let family = [1,2,3,4,5,6,7,8]

for (let i = 0; i < family.length; i++) {
    console.log(family[i])
}