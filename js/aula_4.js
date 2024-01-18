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

    tolowercase() => é usado para converter uma string em letras minúsculas.
    Por exemplo, se você tiver a string "HELLO WORLD", ao aplicar o método toLowerCase(),
    ela será convertida para "hello world".


let p = document.querySelector("p")
    let input = document.querySelector("input")

    const contacts = [
        { name: "Rute", number: "(81) 987221095" },
        { name: "Ruan", number: "(81) 987654321" },
        { name: "Ladja", number: "(81) 912345678" },
        { name: "Silas", number: "(81) 989892631" },
    ]

    function procurar() {

       
        let i = 0
        while (i < [4]) {
            
            
            if (input.value.toLowerCase() === contacts[i].name.toLowerCase())  {
                p.innerHTML = `Contato encontrado - Nome: ${contacts[i].name} Tel:${contacts[i].number}`
                
            }
            i++;
        
    }
    }

    argumento e parametros.
    ex:

        function testePrincipal(resultado1, resultado2) {
            console.log(resultado1 + resultado2)
            console.log(resultado1 - resultado2)
            console.log(resultado1 * resultado2)
            console.log(resultado1 / resultado2)
        }

        testePrincipal(3, 3)

        
}
 
console.log(sum(cart))

for (let i = 0; i < cart.length; i++) {
    if (cart[i] >= 30) {
        cart[i] *= 0.9;
    }

    console.log(cart[i]);
}
    */

let carrinhoDeCompra = [10, 244, 99, 2, 20, 33, 250]
let totalComDesconto = 0
let economia = 0

function formulaComDesconto(price, discount) {
    const regra01 = (price * discount) / 100
    return regra01
}

function apenasDesconto(price, discount) {
    const regra02 = (price * discount)
    return regra02
}

carrinhoDeCompra.forEach((produto) => {
    if (produto > 30) {
        const desconto = formulaComDesconto(produto, 10)
        totalComDesconto += produto - desconto
    }

    else {
        totalComDesconto += produto
    }

    if (produto > 30) {
        const desconto = apenasDesconto(produto, 0.9)
        economia += produto - desconto
    }
});

console.log(`Carrinho de compra R$ ${totalComDesconto + economia},
Total com desconto R$ ${totalComDesconto.toFixed(2)},
Economia de R$ ${economia.toFixed(2)}
`)


















/*const cartComDesconto = cart.map((item) => (item > 30 ? item * 0.9 : item));
const somaComDesconto = cartComDesconto.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(somaComDesconto); */






