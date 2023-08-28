/*
dom => O DOM (Document Object Model) é uma representação estruturada de todos elementos HTML, XML, CSS etc.
        em forma de árvore. Com o JS é possivel modelar dinamicamente essa "arvore",
        modificando os ou o conteúdo, estilo e comportamento da página web.

        ex: uma forma pratica de ver todos esses elementos e suas respectivas RAMIFICAÇÕES,
        é atravez da opção INSPECIONAR, onde se observa de forma pratica toda configuração do código.

script => essa é a TAG que define o JS dentro do HTML,
        <script>Essa tag pode ser inserida dentro do HAED ou logo após o BODY</script>
        A tag SCRIPT pode ter seus valores desenvolvidos entre a tag de abertura e fechamento,
        na propria estrutura do HTML, mas tambem pode ser criado um arguivo esclusivo JS e inserido as configurações
        dentro da tag de abertura, usando o src="METODO, NAVEGANDO ENTRE PASTAS".
*/

console.log("Testando o JS dentro da pagina teste")

/*
document => essa é a referencia do HTML dentro do código JS.
        Quando queremos lincar as "linguagem" dentro do JS, indentificamos na linha de código,
        o document.getElementById ou ...ByClassName - ...ByClasseTagName - ...ByName
*/

//ex:

const input = document.getElementById("main-input")

console.log(input)

const classes = document.getElementsByClassName("cabeçario1")

console.log(classes)

const tags = document.getElementsByTagName("div")

console.log(tags)

const nomes = document.getElementsByName("nome-completo")

console.log(nomes)

/*
queryselector => é mais um dos método da interface Document
                que permite selecionar elementos HTML usando estruturas do CSS. 
                Ele retorna o primeiro elemento que corresponde ao valor desejado.
*/

//ex: buscando uma TAG

const elements = document.querySelector("a")

console.log(elements)

//ex: buscando uma class

const elements2 = document.querySelector(".cabeçario1")

console.log(elements2)

//ex: buscando uma Id

const elements3 = document.querySelector("#main-input")

console.log(elements3)

//ex: buscando um elemento especifico, que não é necessariamente o primeiro na sequencia cascata do código

const elements4 = document.querySelector("div.cabeçario3")

console.log(elements4)

//ex: buscando todos elementos com referencia semelhantes, independente de sua posição no HTML

const elements5 = document.querySelectorAll("div")

console.log(elements5)

//Alterando eleentos do HTML

const abacatinho = document.querySelector("#main-input")

abacatinho.placeholder = "mudei o const"

console.log(abacatinho)

/*
Alterando e acessando texto:

textContent => Pega todo conteúdo (Mostra APENAS oque esta no HTML)
innerText => Pega APENAS o texto (Mostra o texto e tmb configurações do CSS)
innerHTML => Pega todo conteúdo igualmente o textContent (Permite add HTML as alterações do texto)
*/

//ex:

const exemplo = document.querySelector("p")

exemplo.innerHTML = "teste <b>negrito</b>"
console.log(exemplo.innerHTML)


