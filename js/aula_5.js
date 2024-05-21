
/*
const array0 = [1, 2, 3, 4, 5, 6, 7]

const newArray = array0.map((item, index) => {
    if (index === 2) {
        return item + 10;
    }
    else {
        return item;
    }
});

console.log(newArray)

const list = [
    { name: "Silas", vip: true},
    { name: "Rute", vip: false},
    { name: "Ruan", vip: true},
    { name: "Ladja", vip: false},
]

const newList = list.map(convidados => {
const regras = {
    name: convidados.name,
    braceletColor: convidados.vip ? "Preto" : "Verde"
}
return regras
})

console.log(newList)
*/


//1º desafio => alterar intens dentro da array


/* 



const number = ["Silas", 2, 3, 4]

const double = number.map((iten) => iten + " Felipe" )

console.log(double)

// praticando aula map() => modulo JS-5


const boletin = [
    { name: "Silas", nota: 10 },
    { name: "Rute", nota: 8 },
    { name: "Ruan", nota: 6 },
    { name: "Ladja", nota: 4 },
    { name: "Felipe", nota: 1 },
    { name: "Poliana", nota: 3 },
    { name: "Salis", nota: 5 },
    { name: "Samara", nota: 7 },
]

const newBoletin = boletin.map(alunos =>{
    return {
        name: alunos.name,
        resultado: alunos.nota >= 6 ? "PARABENS, VOCÊ FOI APROVADO" : "VOCÊ ESTA EM RECUPERAÇÃO"
    }
})

console.log(newBoletin)

// DESAFIO reduce( )

const carrinhoDeCompra = [
    {produdo: "Feijão", valor: 8.99, unid: 8 },
    {produdo: "Arroz", valor: 5.99, unid: 4 },
    {produdo: "Macarrão", valor: 4.49, unid: 3 },
    {produdo: "Flocão", valor: 1.79, unid: 10 },
    {produdo: "Kg. Coxa e sobre coxa", valor: 15.99, unid: 8 },
]

const checkOut = carrinhoDeCompra.reduce((acc, value) =>{

    const calculo = value.valor * value.unid
    
    return acc + calculo

},0)

console.log(`total da compra: ${checkOut.toFixed(2)}`)

*/

const distribuidor = [
    {industria: "Mars", contrato: 845, sku: "Pedigree e Wiskas", desde: 1898 },
    {industria: "Nadi", contrato: 415, sku: "Utensilios de vidro para cozinha", desde: 1902},
    {industria: "Melitta", contrato: 117, sku: "Café", desde: 1874 },
    {industria: "Bom Bril", contrato: 383, sku: "Limbeza", desde: 1890 },
    {industria: "Predillecta", contrato: 30, sku: "Molhos e doces", desde: 1906 },
    {industria: "Qualidy", contrato: 50, sku: "Alimentos para pets", desde: 2010 },

]

const cardeal = distribuidor.map(valor => {

    valor.contrato = valor.contrato + valor.contrato / 10
    return valor
})

console.log(cardeal)