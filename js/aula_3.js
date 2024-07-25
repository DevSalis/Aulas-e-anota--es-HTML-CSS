/*
Math => Matematica

OBS: para execultar o console.log na saida do terminal, vc deve salvar as alterações antes
        e depois teclar o atalho CTRL + ALT + N

        pow => É usado para calculos de POTENCIA, ex: ao quadrado, ao cubo...
        ex: Math.pow(2,2) ou seja, 2² / Math.pow(2,3) seria 2³

        sqrt => É usado para cauculos de raiz quadrada ou ao cubo
        ex: Math.sqrt(25,2) ou seja, √25

        ceil => Arredonda a pra cima (a fração deve ser separada por . e n por , ex: 7.98)

        floor => Arredonda pra baixo

        random => Mostra numero aleatório entre zero e 1

        const result = 12 % 2
console.log(result)
*/



/*
Operadores Aritméticos

+ => Adição
- => Subtração
/ => Divisão
* => Multiplicação

% => Resto (mostra apenas a sobra do calculo, ex: 13/2 sobraria 1, ou seja, nesse caso 1 é o sesultado.)
++ => Incremento (soma-se 1 a mais)
-- => Decremento (subtrai 1 a menos)
** => Exponencial (tem praticamente a mesma função do POW porem duas vezes mais)
*/

/*
Operadores Atribuição

= => Um unico sinal de (=) é ATRIBUIÇÃO de valor. seja numero ou texto.
+= => Um sinal de (+) junto com o (=), seja antes ou após, é uma abreviação do codigo,
        o sinal proximo ao (=) representa a respectiva variavel, dessa forma é dispensavel digitar o nome da variavel.
        E logo após o (+= ou =+) digita o valor que deseja-se SOMAR a variavel (um vez que o (+) representa uma soma).
-= => A mesma situção anterior, nesse caso inverte apenas a operação matematica, que nesse caso seria subtração (-).
*= => A mesma situção anterior, nesse caso inverte apenas a operação matematica, que nesse caso seria multiplicação (*).
/= => A mesma situção anterior, nesse caso inverte apenas a operação matematica, que nesse caso seria divisão (/).
%= => A mesma situção anterior, nesse caso inverte apenas a operação matematica, que nesse caso seria apenas o valor que sobra do calculo (%).


let result02 = 10490
result02 = result02 % 3

console.log(result02)

*/




let novoCarrinho = [2, 5, 10, 20, 50, 100]
let promotion = 0
let economia = 0

function formula01(price, desconto) {
        const x1 = (price * desconto) / 100
        return x1

}

function formula02(price, desconto) {
        const x2 = (price * desconto)
        return x2

}

novoCarrinho.forEach((mercadoria) => {
        if (mercadoria > 30) {
                const aplicarDesconto = formula01(mercadoria, 10)
                promotion += mercadoria - aplicarDesconto
        }

        else {
                promotion += mercadoria
        }

        if (mercadoria > 30) {
                const aplicareconomia = formula02(mercadoria, 0.9)
                economia += mercadoria - aplicareconomia
        }

});

console.log(promotion)
console.log(economia)



























