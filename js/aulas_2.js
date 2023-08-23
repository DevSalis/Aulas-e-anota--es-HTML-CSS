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