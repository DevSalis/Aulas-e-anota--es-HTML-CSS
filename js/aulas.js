/*
-Para rodar o código e suas respectivas alterações direto no pc, precisa ter instalado:

>NODE
>CODE RUNNER (estenção VScode)
>ctrl+alt+n (P visualizar as alterações)

*/

console.log("testando o console do js")
console.log("testando novamebnte")

/*
VARIAVEIS => Um espaço de memoria (como uma pasta reservada) para armasenar valores (textos, numeros, imagens)
            cada variavel tem um nome defido pelo programador, de acordo com os valores que serão armazenados.
            para executar uma variavel, usa-se palavras chaves, que apesar de ativar a variavel,
            as palaavras chaves yeem caracteristicas defiferentes, são elas:

let - permite trocar o valor da variavel a qualquer momento, se for do interesse do programador.
const - o valor é constante, por tanto não pode sofrer alterações
var - fora de uso

obs: N pode ter variaves com nomes repetidos, independente de serem LET ou CONST
*/

const abacate = 40
console.log(abacate)

/*
TIPOS DE DADOS

String => Textos (para add texto ao codgo do JS, ou seja, p add STRING ao codgo do JS,
    a informação deve esta entre "ASPAS DUPLAS" , 'ASPAS SIMPLES' ou `CRASES`)

*/

const texto1 = "TESTANDO AS ASPAS DUPLAS"
const texto2 = 'TESTANDO AS ASPAS SIMPLES'
const texto3 = `TESTANDO AS CRASES` //As crases são chamadas de TEMPLATE LITERALS ou TEMPLATE STRING

console.log(texto1)
console.log(texto2)
console.log(texto3)

/*
template string => os textos dentro das `crase` possibilita pular linhas no codigo,
                    Além de permitir que variaves sejam add.
                    para isso, essa variavel precisa esta entre ${ESTAR AQUI}

*/

// ex:

const idade = 38
const profissao = `programador`
const sobreMim = `Meu nome é Silas tenho ${30 + 9} e sou um ${profissao}`

console.log(sobreMim)

/*
numbers => Numeros (dados referentes a numeros, seja por numerção exata ou calculos)
            Para o dados de numero seren execultados com sua respectiva função,
            a informação apos o sinal de = NÃO pode esta entre aspas.

*/

//ex:

const number1 = 100
const number2 = 100 + 1

console.log(number1)
console.log(number2)

/*
boolean => Boleano, é um tipo de dado em programação que possui dois possíveis valores:
        verdadeiro (true) ou falso (false). Ele é usado para representar
        condições lógicas e é fundamental em muitas operações e estruturas de controle.
*/