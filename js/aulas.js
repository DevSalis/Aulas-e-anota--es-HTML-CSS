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

/*
object => Os objetos em JS diferente do "cochetes" esses são compostos por {pares de chave,e entre elas o valor, ou as informações},
        a chave é uma string que representa o nome da propriedade
        e o valor pode ser qualquer tipo de dado, incluindo outros objetos.
        Eles são amplamente utilizados para organizar e manipular dados de forma estruturada, ou agrupadas.
 */

//ex:

const silas = {
    name: "Silas Felipe da S Costa",
    age: 38,
    profession: "Web Developer",
    course: "DevClub",
    address: {
        street: "R Catuana",
        number: 50 + 7,
        city: "Recife",
        state: "PE",
        conntry: "Brasil"
    }

}

console.log(silas)

/*
null => o valor "null" é usado para representar a ausência INTENCIONAL de um valor ou a falta de um objeto.
undefined =>  indica que uma variável não foi declarada ou não possui um valor atribuído.
            Na pratica, é quando você sugere uma ação, porem essa informção não existe no codigo,
            uma vez que undefined aparece no codigo, significa que algo esta errado.
*/

//ex:

const nullEundefined = {
    name: "null",
}

console.log(nullEundefined)
console.log(nullEundefined.id)

/*
array => é uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo.
        Os elementos são organizados sequencialmente em posições numeradas, chamadas de índices.
        A ordem numerica inicia-se apartir do numero ZERO (ex: 0, 1, 2, 3)
        Cada elemento (seja um string, number, object) deve esta entre os [colchetes]
        e serem separados pela virgula. ex: ["string", 01, {object: "string", number: 01}]
        Isso permite o acesso e a manipulação dos elementos de forma eficiente.
*/

//ex:

const exArray = [
    "string",
    20 * 5,
    { name: "Silas Felipe" },
    { age: 100 / 5 }
]

exArray[2].name = "Rute Poliana"

console.log(exArray)

/*
OPERADORORES DE COMPARAÇÃO:

>  => Maior que...
<  => Menor que...
== => Iqual que...

CONTROALDOR DE FLUXO:

if => (se) é uma estrutura que permite executar algo solicitado uma vez que a inforção de fato exista
        se relmente for VERDADADEIRO.
        ex: let (idade = 18);
            if (idade >= 18) {
                console.log("Maior de idade")
            }

else => (se não) essa estrutura é execultada uma vez que o IF foi considerada inexistente ou FALSA.
        ex: let idade = 18;
            if (idade >= 18) {
                console.log("Maior de idade");
            }
            else {
                console.log("Menor de idade");
            }
*/

let idade2 = 18

if (idade2 >= 18) {
    console.log("Maior de idade")
}
else {
    console.log("Menor de idade")
}